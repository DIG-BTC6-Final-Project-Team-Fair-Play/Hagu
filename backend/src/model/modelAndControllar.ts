const knex: Knex = require("../db/index");
import type { Knex } from "knex";
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
import { REPLCommand } from "repl";

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
    await knex("photos").insert(photo);
    res.status(201).send("写真更新おｋ");
  },

  async getTimelapse(req: Request, res: Response) {
    const id = req.params.id;
    const photos: Photos[] = await knex("photos")
      .select("*")
      .where({ seedling_id: parseInt(id) })
      .orderBy("date", "asc");
    const mapData = photos.map((obj: Photos) => obj.photo_data);
    // res.send(JSON.stringify(mapData));
    res.send(mapData);
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
