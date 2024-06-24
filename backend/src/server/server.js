const express = require("express");
const path = require("path");
// knexを読み込み
const knex = require("../db/index");

const app = express();

const setupExpressApp = () => {
  app.use(express.json());
  app.get("/api/data", async (req, res) => {
    const data = await knex("sample").select("*");
    res.json(data);
  });

  return app;
};

module.exports = { setupExpressApp };
