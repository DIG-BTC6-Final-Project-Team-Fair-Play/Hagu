// const express = require("express");
// tsのためimportに変更
// コンパイル文に --esModuleInterlop
import express from "express";
import type { Express, Request, Response } from "express";
import type { Knex } from "knex";
import { NewSeedling, Vegetables } from "../types/globals";

const path = require("path");
// knexを読み込み
const knex: Knex = require("../db/index");

const app: Express = express();

const setupExpressApp = () => {
  app.use(express.json());
  //
  app.use("/", express.static(path.join(__dirname, "../../dist")));
  // app.get("/", (req: Request, res: Response) => {
  //   res.send("サーバーOK");
  // });
  app.get("/api/data", async (req: Request, res: Response) => {
    const data = await knex("sample").select("*");
    res.json(data);
  });

  app.get("/api/vegetables", async (req: Request, res: Response) => {
    const vegetables: Vegetables[] = await knex("vegetables").select("*");
    res.status(200).send(vegetables);
  });

  app.post("/api/seedlings", async (req: Request, res: Response) => {
    console.log("hogehoge");
    const newSeedling: NewSeedling = req.body;
    console.log("newSeedling: ", newSeedling);

    await knex("seedlings").insert(newSeedling);
    res.status(201).send("新しい苗作ったよ");
  });

  return app;
};

module.exports = { setupExpressApp };
