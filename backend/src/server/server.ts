// const express = require("express");
// tsのためimportに変更
// コンパイル文に --esModuleInterlop
import express from "express";
import type { Express, Request, Response } from "express";
import type { Knex } from "knex";
import { NewSeedling, Vegetables } from "../types/globals";

import controller from "../model/modelAndControllar";

const path = require("path");
// knexを読み込み
const knex: Knex = require("../db/index");

const app: Express = express();

const setupExpressApp = () => {
  app.use(express.json());
  //
  app.use("/", express.static(path.join(__dirname, "../../dist")));

  app.get("/api/vegetables", controller.getVegetable);

  app.get("/api/equipments/:id", controller.getEquipments);

  app.post("/api/seedlings", controller.postSeedlings);

  app.get("/api/advice/:vegetableId", controller.getAdvice);

  app.get("/api/seedlings/:userId", controller.getSeedlings);

  app.put("/api/seedlings/:id/growth", controller.putSeedlingsGrowth);

  app.put("/api/seedlings/:id/water", controller.putSeedlingsWater);

  app.post("/api/photos", controller.postPhotos);

  app.get("/api/seedlings/:id/timelapse", controller.getTimelapse);

  app.get("/api/friends/:userId", controller.getFriends);
  
  app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../../dist", "index.html"));
  });

  return app;
};

module.exports = { setupExpressApp };
