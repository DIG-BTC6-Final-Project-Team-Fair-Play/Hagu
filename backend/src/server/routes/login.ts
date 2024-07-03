import express from "express";
import type { Express, Request, Response, Router } from "express";
import type { Knex } from "knex";
import { Users } from "../../types/globals";
const router: Router = express.Router();

// knexを読み込み
const knex: Knex = require("../../db/index");

const path = require("path");
const session = require("express-session");
const line_login = require("line-login");

// linelogin envの読み込み
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});
// ====session.userの型定義======
declare module "express-session" {
  interface SessionData {
    user?: {
      lineId: string;
      name: string;
      picture: string;
    } | null;
  }
}

// ===sessionの利用====60分のクッキー有効
router.use(
  session({
    secret: process.env.LINE_LOGIN_CHANNEL_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 180 * 60 * 1000,
    },
  })
);

// !=======line-login モジュールのインスタンス作成~lineloginモジュールの利用=======
const login = new line_login({
  channel_id: process.env.LINE_LOGIN_CHANNEL_ID,
  channel_secret: process.env.LINE_LOGIN_CHANNEL_SECRET,
  callback_url: process.env.LINE_LOGIN_CALLBACK_URL,
});

// lineloginへリダイレクトさせる
router.get("/api/auth", login.auth());

// 認証完了後
router.get(
  "/api/callback",
  login.callback(
    async (
      req: Request,
      res: Response,
      next: Function,
      token_response: any
    ) => {
      // 認証フロー成功時
      req.session.user = {
        lineId: token_response.id_token.sub,
        name: token_response.id_token.name,
        picture: token_response.id_token.picture,
      };
      //   console.log("req.session: ", req.session);

      const lineId = await knex<Users>("users")
        .select("line_id")
        .where({ line_id: req.session.user.lineId })
        .first();
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

// ログアウト
router.get(
  "api/logout",
  function (req: Request, res: Response, next: Function) {
    req.session.user = null;
    req.session.save(function (err: Error) {
      if (err) next(err);

      req.session.regenerate(function (err: Error) {
        if (err) next(err);
        res.redirect("/");
      });
    });
  }
);

// !====各ページの認証チェック======
// 認証チェックミドルウェア(セッションにJWTが含まれていなければ/リダイレクト)
const isAuthenticated = (req: Request, res: Response, next: Function) => {
  console.log("====セッションID====: ", req.sessionID);
  console.log("req.session.user: ", req.session.user);

  if (req.session.user) {
    next();
  } else {
    res.redirect("/");
  }
};
router.get("/home", isAuthenticated);
router.get("/create", isAuthenticated);
router.get("/camera", isAuthenticated);
router.get("/photos", isAuthenticated);
router.get("/friends", isAuthenticated);

module.exports = router;
