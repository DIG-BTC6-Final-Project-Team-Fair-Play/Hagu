// const knex = require("knex");
import knex from "knex";
// configをknexに統合
// const knexConfig = require("./knexfile");
import config from "./knexfile";
// knexfileの環境設定をどちらにするか決定
const environment = process.env.DATABASE_URL ? "production" : "development";

module.exports = knex(config[environment]);


