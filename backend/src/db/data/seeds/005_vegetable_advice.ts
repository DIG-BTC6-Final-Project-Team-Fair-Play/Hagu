import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("vegetable_advice").del();

  // Inserts seed entries
  await knex("vegetable_advice").insert([
    {
      vegetable_id: 1,
      growing_stage_no: 0,
      advice:
        "• スコップで苗と同じくらいの大きさの穴を掘ります。\n• 人差し指と中指で苗をやさしく挟んで、そのままポットごとひっくり返し、土の部分を崩さないようにゆっくりポットを引き上げます。\n• 苗をやさしく鉢土ごと穴に植えます。このとき、鉢土の1/5がプランターの土からでるくらいに浅く植えるのがコツです。",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 1,
      advice:
        "• 支柱と茎を紐で結んで誘引します\n• 水をたっぷりと与えます\n• 最初の2～3日は日陰に置きます\n• 一番花が咲いたら次のステージです",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 2,
      advice:
        "• 主枝とそのすぐ下の側枝を2本残します\n• わき芽は全て摘み取ります\n• 実がなり始めたら次のステージです",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 3,
      advice:
        "• 株が大きくなる前に本支柱を立てます\n• 茎のところどころを結んで誘引します\n• 実に色が付いたら次のステージです",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 4,
      advice:
        "• 色付いた実が約4cmで収穫です\n• 放っておくと他の実に栄養がいかないので早めに収穫しましょう\n• 収穫したら次のステージです",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 5,
      advice: "収穫した野菜の料理や食べているところを写真に残しましょう！",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 0,
      advice:
        "•スコップで苗と同じくらいの大きさの穴を掘ります。\n• 人差し指と中指で苗をやさしく挟んで、そのままポットごとひっくり返し、土の部分を崩さないようにゆっくりポットを引き上げます。\n• 苗をやさしく鉢土ごと穴に植えます。このとき、鉢土の1/5がプランターの土からでるくらいに浅く植えるのがコツです。",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 1,
      advice:
        "• 苗から10～15cmほど離れたところに、長さ150cmくらいの支柱を垂直に立てて誘引します\n• 花が咲いたら次のステージです",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 2,
      advice:
        "• 枝葉が混んできたら整枝します\n• わき芽をかき取り、主枝と側枝のを2本残します\n• 実がなり始めたら次のステージです",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 3,
      advice:
        "• 側枝が重たくてぐらつくようなら、追加で90cm程度の支柱を斜めに立てて固定します\n• 実に色が付いたら次のステージです",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 4,
      advice:
        "• 1月経ったら、2週間に1回追肥します\n• 一番果、二番果がつき始めたら小さいうちに収穫します\n• 収穫したら次のステージです",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 5,
      advice: "収穫した野菜の料理や食べているところを写真に残しましょう！",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 0,
      advice:
        "• スコップで苗と同じくらいの大きさの穴を掘ります。\n• 人差し指と中指で苗をやさしく挟んで、そのままポットごとひっくり返し、土の部分を崩さないようにゆっくりポットを引き上げます。\n• 苗をやさしく鉢土ごと穴に植えます。このとき、鉢土の1/5がプランターの土からでるくらいに浅く植えるのがコツです。",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 1,
      advice:
        "• 苗を植えたら支柱を立てます\n• 支柱と茎を麻ひもなどで結びます。この作業を誘引といいます\n• 花が咲いたら次のステージです",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 2,
      advice:
        "• トマト専用の着果促進剤を花房全体にひと吹きします\n• 実がなり始めたら次のステージです",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 3,
      advice:
        "• 肥料を10g、土全体にまきましょう\n• 最初の1回は、苗を植えてから2～3週間後を目安にします\n• 実に色が付いたら次のステージです",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 4,
      advice:
        "• 実は先端から熟しはじめます\n• ヘタ付近まで赤くなったら、いよいよ収穫です\n• 収穫したら次のステージです",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 5,
      advice: "収穫した野菜の料理や食べているところを写真に残しましょう！",
    },
  ]);
}
