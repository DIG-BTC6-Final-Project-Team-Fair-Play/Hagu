import express from "express";
import type { Express, Request, Response, Router } from "express";

const router: Router = express.Router();
const path = require("path");
// openAI envの読み込み
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

// openAI
// OPENAI_API_KEY
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });

// リクエスト
// APIリクエストの作成
async function main(setting: any) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: setting }],
    model: "gpt-3.5-turbo",
  });

  // console.log("completion: ", completion);

  return completion.choices[0].message;
}

router.get("/api/aiMessageBefore", async (req, res) => {
  // seedlingIdを受け取りDBと接続して受け取る.

  // 性格案
  // 一人称: オラ　ワイ　ワテ　ウチ　わたし　俺　朕　我　わっち　あたい　あたし　おいら ボツ
  // 年齢 5歳　10代前半　10代後半　20代　30代　４０代　ボツ
  // 語尾:猫風　犬風　ゴリラ風　猿風　（適当）（大阪弁）（名古屋弁）（博多弁）（青森弁）（岡山弁）（ギャル風）(ルフィ風) (だよん)　（ぴょん）(なると風)（イタリアン風）(宇宙語)（老婆風）（地底人）(絵文字)
  // 性格：　厳格　温厚　ツンデレ　天邪鬼　マイペース　ゆうかん　怠け者　元気　ボツ

  // ISTP
  const character = `*語尾:名古屋弁`;

  const yourCharacter = `#あなたは植物でこのような性格を持ちます。これに基づいて返信をください。
${character}

#現在の心境：水がもらえず喉がカラカラ。
    `;
  const message = await main(yourCharacter);
  res.send(message);
});

router.get("/api/aiMessageAfter", async (req, res) => {
  // 性格を受け取る
  const character = `*語尾:絵文字`;

  const yourCharacter = `#あなたは植物でこのような性格を持ちます。これに基づいて返信をください。
    ${character}

    現在の状態：水をもらってとても喜んでいます。
    `;
  const message = await main(yourCharacter);
  res.send(message);
});

module.exports = router;
