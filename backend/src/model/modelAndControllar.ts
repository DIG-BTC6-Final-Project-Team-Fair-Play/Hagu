import type { Knex } from "knex";
const knex: Knex = require("../db/index");
import {
  NewSeedling,
  Vegetable_advice,
  Vegetables,
  Equipments,
  Seedlings,
  PutGrowth,
  PutWater,
  PostPhotos,
  Photos,
  Friends,
  Users,
} from "../types/globals";
import type { Express, Request, Response } from "express";

// import storage from "../../../frontend/src/firebase/firebase";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import axios from "axios";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACS5LeJ1gbmAdb2U8UzM9E8iYhD80niTM",
  authDomain: "hagu-882e3.firebaseapp.com",
  projectId: "hagu-882e3",
  storageBucket: "hagu-882e3.appspot.com",
  messagingSenderId: "268979382884",
  appId: "1:268979382884:web:101f4cc18d4781e5158d71",
};

export = {
  async getVegetable(req: Request, res: Response) {
    const vegetables: Vegetables[] = await knex("vegetables").select(
      "id",
      "image",
      "label",
      "description",
      "content"
    );
    res.status(200).send(vegetables);
  },
  async getEquipments(req: Request, res: Response) {
    const id = req.params.id;
    const equipments: Equipments[] = await knex("vegetables")
      .select("id", "equipment_list")
      .where({ id: parseInt(id) });
    res.status(200).send(equipments);
  },

  async postSeedlings(req: Request, res: Response) {
    const newSeedling: NewSeedling = req.body;
    const seedlingId = await knex("seedlings")
      .insert(newSeedling)
      .returning("id");

    res.status(201).send(seedlingId[0]);
  },

  async getAdvice(req: Request, res: Response) {
    const id = req.params.vegetableId;
    const data: Vegetable_advice[] = await knex("vegetable_advice")
      .select("*")
      .where("vegetable_id", parseInt(id));
    res.status(200).send(data);
  },

  async getSeedlings(req: Request, res: Response) {
    const id = req.params.userId;
    const data: Seedlings[] = await knex("seedlings")
      .select("*")
      .where("user_id", parseInt(id))
      .whereNot("growing_stage_no", 999)
      .orderBy("id");
    res.json(data);
  },

  async putSeedlingsGrowth(req: Request, res: Response) {
    // 苗id
    const id = req.params.id;
    const growth: PutGrowth = req.body;

    // {growing_stage_no:2}
    await knex("seedlings")
      .where({ id: parseInt(id) })
      .update(growth);

    res.sendStatus(204);
  },

  async putSeedlingsWater(req: Request, res: Response) {
    // 苗id
    const id = req.params.id;
    const water: PutWater = req.body;

    // {last_watering:"2024-06-26T05:20:42.268Z"}
    await knex("seedlings")
      .where({ id: parseInt(id) })
      .update(water);

    res.sendStatus(204);
  },

  async getLastPhoto(req: Request, res: Response) {
    const id = parseInt(req.params.seedlingId);
    const lastPhotoList = await knex("photos")
      .where({ seedling_id: id })
      .orderBy("created_at", "desc")
      .first();
    res.json(lastPhotoList);
  },

  async getPhotosList(req: Request, res: Response) {
    const id = parseInt(req.params.userId);
    const friendsId = await knex("friends")
      .select("friends.friend_id")
      .where({ user_id: id });
    const searchId = [id, ...friendsId.map((obj) => obj.friend_id)];
    // ! seedlin_idでグループ化して最新日付を取得
    const latestPhotosSubquery = knex("photos")
      .select("seedling_id")
      .max("created_at as max_created_at")
      .groupBy("seedling_id")
      .as("latest_photos_subquery");
    // ! innnerJoinで元データと上データを結合して両方に存在するデータでソート
    const latestPhotos = knex("photos")
      .join(latestPhotosSubquery, function () {
        this.on(
          "photos.seedling_id",
          "=",
          "latest_photos_subquery.seedling_id"
        ).andOn(
          "photos.created_at",
          "=",
          "latest_photos_subquery.max_created_at"
        );
      })
      .select("photos.seedling_id", "photos.photo_data")
      .as("latest_photos");
    // ! seedlingのseedling.idと上記を紐付け
    const photosList = await knex("seedlings")
      .select(
        "seedlings.id",
        "seedlings.user_id",
        "seedlings.seedling_name",
        "users.user_name",
        "users.picture",
        "vegetables.label",
        "latest_photos.photo_data"
      )
      .leftOuterJoin("users", "users.id", "seedlings.user_id")
      .leftOuterJoin("vegetables", "vegetables.id", "seedlings.vegetable_id")
      .leftOuterJoin(latestPhotos, "latest_photos.seedling_id", "seedlings.id")
      .whereIn("seedlings.user_id", searchId);
    res.json(photosList);
  },

  async postPhotos(req: Request, res: Response) {
    const photo: PostPhotos = req.body;

    initializeApp(firebaseConfig);
    const storage = getStorage();
    const storageRef = ref(storage, photo.photo_data);

    getDownloadURL(storageRef).then(
      async (url) =>
        await knex("photos").insert({
          seedling_id: photo.seedling_id,
          photo_data: url,
        })
    );

    res.status(201).send("写真更新おｋ");
  },

  async postEatPhotos(req: Request, res: Response) {
    const photo: PostPhotos = req.body;

    initializeApp(firebaseConfig);
    const storage = getStorage();
    const storageRef = ref(storage, photo.photo_data);

    getDownloadURL(storageRef).then(
      async (url) =>
        await knex("seedlings").where({ id: photo.seedling_id }).update({
          eat_photo_url: url,
        })
    );

    res.status(201).send("写真更新おｋ");
  },

  async getTimelapse(req: Request, res: Response) {
    const id = req.params.id;
    const photos: Photos[] = await knex("photos")
      .select("*")
      .where({ seedling_id: parseInt(id) })
      .orderBy("created_at", "asc");

    const mapData = photos.map(async (obj: Photos) => {
      const response = await axios.get(obj.photo_data, {
        responseType: "arraybuffer",
      });
      const base64 = response.data.toString("base64");
      return base64;
    });

    const promiseAll = await Promise.all(mapData);
    res.send(promiseAll);
    // const mapData = photos.map((obj: Photos) => obj.photo_data);
    // res.send(mapData);
  },

  async getFriends(req: Request, res: Response) {
    const id = req.params.userId;
    const friends: Friends[] = await knex("friends")
      .select("friends.*", "users.user_name")
      .leftOuterJoin("users", "users.id", "friends.friend_id")
      .where({ user_id: parseInt(id) });
    res.send(friends);
  },

  async postFriends(req: Request, res: Response) {
    const id = req.params.userId;
    const addFriend_id: number = req.body.friendId;
    await knex("friends").insert({ user_id: id, friend_id: addFriend_id });
    res.sendStatus(201);
  },

  async deleteFriends(req: Request, res: Response) {
    const id: string = req.params.userId;
    const deleteFriend_id: string = req.params.friendId;
    await knex("friends")
      .delete()
      .where({ user_id: parseInt(id), friend_id: parseInt(deleteFriend_id) });
    res.sendStatus(204);
  },

  async deleteSeedling(req: Request, res: Response) {
    const id: string = req.params.id;
    await knex("seedlings")
      .delete()
      .where({ id: parseInt(id) });
    res.sendStatus(204);
  },

  async getUsersList(req: Request, res: Response) {
    // サブクエリで各ユーザーの育てている苗の数をカウント
    const seedlingsCountSubquery = knex("seedlings")
      .select("user_id")
      .count("* as seedling_count")
      .groupBy("user_id")
      .as("seedlings_count_subquery");
    // メインクエリでユーザー情報と苗のカウントを取得
    const usersList = await knex("users")
      .select(
        "users.id as user_id",
        "users.user_name",
        "users.picture",
        knex.raw(
          "coalesce(seedlings_count_subquery.seedling_count, 0) as seedling_count"
        )
      )
      .leftJoin(
        seedlingsCountSubquery,
        "users.id",
        "seedlings_count_subquery.user_id"
      );
    res.send(usersList);
  },

  async getUsers(req: any, res: Response) {
    if (req.session.user) {
      const lineId: string = req.session.user.lineId;
      const userData: Users = await knex("users")
        .select("*")
        .where({ line_id: lineId })
        .first();
      res.send(userData);
    } else {
      res.sendStatus(401);
    }
  },
};
