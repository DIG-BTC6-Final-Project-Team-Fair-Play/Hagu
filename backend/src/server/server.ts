// const express = require("express");
// tsのためimportに変更
// コンパイル文に --esModuleInterlop
import express from "express";
import type { Express, Request, Response } from "express";

const path = require("path");
// knexを読み込み
const knex = require("../db/index");

const app: Express = express();

const setupExpressApp = () => {
  app.use(express.json());
  app.get("/", (req: Request, res: Response) => {
    res.send("サーバーOK");
  });
  app.get("/api/data", async (req: Request, res: Response) => {
    const data = await knex("sample").select("*");
    res.json(data);
  });

  return app;
};

module.exports = { setupExpressApp };
