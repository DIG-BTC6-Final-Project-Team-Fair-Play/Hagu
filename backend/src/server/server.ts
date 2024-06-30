// const express = require("express");
// tsのためimportに変更
// コンパイル文に --esModuleInterlop
import express, { response } from "express";
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
// セッション保存
// バグバぐ
// const memoryStore = new MemoryStore({ checkPeriod: 86400000 }); // 24時間ごとに古いセッションをクリーンアップ
const session_options = {
  secret: process.env.LINE_LOGIN_CHANNEL_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000,
  },
};
app.use(session(session_options));

// !認証の設定。
const login = new line_login({
  channel_id: process.env.LINE_LOGIN_CHANNEL_ID,
  channel_secret: process.env.LINE_LOGIN_CHANNEL_SECRET,
  callback_url: process.env.LINE_LOGIN_CALLBACK_URL,
});

// !セッションチェックミドルウェア(セッションにJWTが含まれていなければ/signInへリダイレクト)
// https://qiita.com/moomooya/items/00f89e425a3034b8ea14
const isAuthenticated = (req: any, res: Response, next: Function) => {
  console.log("クライアントのセッション: ", req.session.user);
  console.log("req.session: ", req.session);
  console.log("req.session: ", req.sessionID);

  // console.log("セッション: ", memoryStore);
  if (req.session.user) {
    next();
  } else {
    res.redirect("/");
  }
};

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
      async (req: any, res: Response, next: Function, token_response: any) => {
        // 認証フロー成功時
        console.log("token_response: ", token_response);
        req.session.user = {
          lineId: token_response.id_token.sub,
          name: token_response.id_token.name,
          picture: token_response.id_token.picture,
        };
        console.log("req.session: ", req.session);

        // ここでデータベースに新規登録を行う DBに存在するか確認し
        const lineId = await knex("users")
          .select("line_id")
          .where({ line_id: req.session.user.lineId })
          .first();
        console.log("lineId: ", lineId);
        if (lineId) {
          req.session.save(function (err: Error) {
            if (err) return next(err);
            res.redirect("/home");
          });
        } else {
          // 新規登録されたら説明画面に移動させることも可能
          await knex("users").insert({
            line_id: req.session.user.lineId,
            user_name: req.session.user.name,
            picture: req.session.user.picture,
          });
          req.session.save(function (err: Error) {
            if (err) return next(err);
            res.redirect("/home");
          });
        }
      },
      (req: Request, res: Response, next: Function, error: Error) => {
        // 認証フロー失敗時
        res.status(400).json(error);
      }
    )
  );

  // !認証ユーザー以外はじく
  app.get("/home", isAuthenticated);
  app.get("/create", isAuthenticated);
  app.get("/camera", isAuthenticated);
  app.get("/photos", isAuthenticated);
  app.get("/friends", isAuthenticated);

  // !====linelogin===

  app.get("/api/users", controller.getUsers);

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
