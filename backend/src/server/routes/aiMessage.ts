import express from "express";
import type { Express, Request, Response, Router } from "express";
import type { Knex } from "knex";
// knexを読み込み
const knex: Knex = require("../../db/index");

const router: Router = express.Router();
const path = require("path");
// openAI envの読み込み
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

// OPENAI_API_KEY
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });

// リクエスト
// APIリクエストの作成
async function createAImessage(setting: any) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: setting }],
    model: "gpt-3.5-turbo",
  });

  // console.log("completion: ", completion);

  return completion.choices[0].message;
}

router.get("/api/aiMessageBefore/:seedId", async (req, res) => {
  // seedlingIdを受け取りDBと接続して受け取る.
  const seedId = parseInt(req.params.seedId);

  let { seedling_name, character } = await knex("seedlings")
    .select("character", "seedling_name")
    .where({ id: seedId })
    .first();

  // nullのseedDataは絵文字の語尾にする
  character === null && (character = "絵文字");
  console.log("キャラクターは: ", character);

  const yourCharacter = `#あなたは植物でこのような性格を持ちます。これに基づいて返信をください。
  ※ただしキャラクターの名前が指定されている場合その名前は出さないでください。
  ※文字数は25文字〜40文字です。出力前に文字数を確認しオーバーしていた場合45文字以下になるように、30文字に満たない場合は25文字以上になるよう語句を付け足してください。

  *語尾または口調:${character}

  #現在の心境：水がもらえず喉がカラカラ。
    `;
  const message = await createAImessage(yourCharacter);
  res.send(message);
});

router.get("/api/aiMessageAfter/:seedId", async (req, res) => {
  // 性格を受け取る
  const seedId = parseInt(req.params.seedId);
  console.log("seedId: ", seedId);
  let { seedling_name, character } = await knex("seedlings")
    .select("character", "seedling_name")
    .where({ id: seedId })
    .first();
  // nullのseedDataは絵文字の語尾にする
  character === null && (character = "絵文字");
  console.log("キャラクターは: ", character);

  const yourCharacter = `#あなたは植物でこのような性格を持ちます。これに基づいて返信をください。
  ※ただしキャラクターの名前が指定されている場合その名前は出さないでください。
  ※文字数は25文字〜40文字です。出力前に文字数を確認しオーバーしていた場合45文字以下になるように、30文字に満たない場合は25文字以上になるよう語句を付け足してください。

  *語尾または口調:${character}

  #現在の状態：水をもらってとても喜んでいます。
    `;

  // message = {role: 'assistant', content: 'ニャン♪ 水をもらえてうれしいニャ♪ ありがとニャン♪'}
  const message = await createAImessage(yourCharacter);
  res.send(message);
});

module.exports = router;
