// const express = require("express");
// tsのためimportに変更
// コンパイル文に --esModuleInterlop
import express from "express";
import type { Express, Request, Response } from "express";
import type { Knex } from "knex";
import { NewSeedling, Vegetables } from "../types/globals";

import controller from "../model/modelAndControllar";
// knexを読み込み
const knex: Knex = require("../db/index");

const app: Express = express();
// !linelogin
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

// !linelogin2
const line_login = require("line-login");
const session = require("express-session");
const session_options = {
  secret: process.env.LINE_LOGIN_CHANNEL_SECRET,
  resave: false,
  saveUninitialized: false,
};
app.use(session(session_options));

// !認証の設定。
const login = new line_login({
  channel_id: process.env.LINE_LOGIN_CHANNEL_ID,
  channel_secret: process.env.LINE_LOGIN_CHANNEL_SECRET,
  callback_url: process.env.LINE_LOGIN_CALLBACK_URL,
});

const setupExpressApp = () => {
  app.use(express.json());
  //
  app.use("/", express.static(path.join(__dirname, "../../dist")));

  // !====linelogin===
  // 認証フローを開始するためのルーター設定。
  app.get("/auth", login.auth());
  
  // ユーザーが承認したあとに実行する処理のためのルーター設定。
  app.get(
    "/callback",
    login.callback(
      (req: Request, res: Response, next: Function, token_response: any) => {
        // 認証フロー成功時
        console.log("token_response: ", token_response);
        
        res.json(token_response);
      },
      (req: Request, res: Response, next: Function, error: Error) => {
        // 認証フロー失敗時
        res.status(400).json(error);
      }
    )
  );
  
  // !====linelogin===

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
