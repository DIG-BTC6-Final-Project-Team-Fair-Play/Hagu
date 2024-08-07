import express from "express";
import type { Express, Request, Response } from "express";
import type { Knex } from "knex";
import { NewSeedling, Vegetables } from "../types/globals";

import controller from "../model/modelAndControllar";

// knexを読み込み
const knex: Knex = require("../db/index");

const app: Express = express();

const path = require("path");

const setupExpressApp = () => {
  app.use(express.json());
  //
  app.use("/", express.static(path.join(__dirname, "../../dist")));

  // !====linelogin===

  app.use("/", require("./routes/login"));

  app.get("/api/users", controller.getUsers);

  app.get("/api/vegetables", controller.getVegetable);

  app.get("/api/equipments/:id", controller.getEquipments);

  app.post("/api/seedlings", controller.postSeedlings);

  app.get("/api/advice/:vegetableId", controller.getAdvice);

  app.get("/api/seedlings/:userId", controller.getSeedlings);

  app.put("/api/seedlings/:id/growth", controller.putSeedlingsGrowth);

  app.put("/api/seedlings/:id/water", controller.putSeedlingsWater);

  app.get("/api/photos/:userId", controller.getPhotosList);

  app.get("/api/lastPhotos/:seedlingId", controller.getLastPhoto);

  app.post("/api/photos", controller.postPhotos);

  app.put("/api/eat_photos", controller.postEatPhotos);

  app.get("/api/seedlings/:id/timelapse", controller.getTimelapse);

  app.get("/api/friends/:userId", controller.getFriends);

  app.post("/api/friends/:userId", controller.postFriends);

  app.delete("/api/friends/:userId/:friendId", controller.deleteFriends);

  app.get("/api/users/list", controller.getUsersList);

  app.delete("/api/seedlings/:id", controller.deleteSeedling);

  app.use("/", require("./routes/aiMessage"));
  // AIメッセージの作成

  app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../../dist", "index.html"));
  });

  return app;
};

module.exports = { setupExpressApp };
