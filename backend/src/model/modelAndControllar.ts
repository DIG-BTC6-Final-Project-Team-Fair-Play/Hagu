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
    await knex("seedlings").insert(newSeedling);
    res.status(201).send("新しい苗作ったよ");
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
      .where("user_id", parseInt(id));
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

  async getTimelapse(req: Request, res: Response) {
    const id = req.params.id;
    const photos: Photos[] = await knex("photos")
      .select("*")
      .where({ seedling_id: parseInt(id) });
    // .orderBy("date", "asc");
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
