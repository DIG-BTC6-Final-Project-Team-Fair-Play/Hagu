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

router.get("/api/aiMessage", async (req, res) => {
  const yourCharacter =
    "あなたは植物です。人間のように千差万別の性格を持ちます。語尾はランダムです。2回に一回は性格がクッソ悪くなります。現在は空腹で水を死ぬほど求めています。";
  const message = await main(yourCharacter);
  res.send(message);
});

module.exports = router;
