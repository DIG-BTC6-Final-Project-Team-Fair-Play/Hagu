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
        "- スコップで苗と同じくらいの大きさの穴を掘ります。\n- 人差し指と中指で苗をやさしく挟んで、そのままポットごとひっくり返し、土の部分を崩さないようにゆっくりポットを引き上げます。\n- 苗をやさしく鉢土ごと穴に植えます。このとき、鉢土の1/5がプランターの土からでるくらいに浅く植えるのがコツです。",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 1,
      advice:
        "- 支柱と茎を紐で結んで誘引します\n- 水をたっぷりと与えます\n- 2～3日は日陰に置きます\n- 日当・風通の良い場所に移します",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 2,
      advice:
        "- 一番花が咲いたら、主枝とそのすぐ下の側枝を2本残します\n- わき芽は全て摘み取ります",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 3,
      advice:
        "- 株が大きくなる前に本支柱を立てます\n- さらに茎のところどころをひもで結んで誘引します",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 4,
      advice: "- 実がつき始めたら、化成肥料を10gやります",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 5,
      advice:
        "- 長さ3～4cmのうちに収穫します\n- 放っておくと他の実に栄養がいかなくなってしまうので早めに収穫しましょう",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 0,
      advice: "なすの定植に適したアドバイス",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 1,
      advice:
        "- 苗から10～15cmほど離れたところに、長さ150cmくらいの支柱を垂直に立てて誘引します\n- 水をたっぷりと与えます",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 2,
      advice:
        "- 株が成長して枝葉が混んできたら養分の分散を防ぐために整枝します\n- わき芽をかき取り、主枝とそのすぐ下の側枝を2本残します",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 3,
      advice:
        "- 側枝が重たくてぐらつくようなら、追加で90cm程度の支柱を斜めに立てて固定します",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 4,
      advice:
        "- 植え付けから約1カ月経ったら、2週間に1回追肥します\n- 1株あたりに肥料をひと握り（約20～30g）追肥します",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 5,
      advice:
        "- 一番果、二番果がつき始めたら小さいうちに収穫します\n- そうすると三番果以降の生長を促せます",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 0,
      advice:
        "- スコップで苗と同じくらいの大きさの穴を掘ります。\n- 人差し指と中指で苗をやさしく挟んで、そのままポットごとひっくり返し、土の部分を崩さないようにゆっくりポットを引き上げます。\n- 苗をやさしく鉢土ごと穴に植えます。このとき、鉢土の1/5がプランターの土からでるくらいに浅く植えるのがコツです。",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 1,
      advice:
        "- 苗を植えたら、苗のそばに支柱を立てます\n- 支柱と茎を麻ひもなどで結びます。この作業を誘引といいます。",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 2,
      advice:
        "- 花が２、3輪咲いてきたら着果促進をしまししょう\n- トマト専用の着果促進剤を花房全体にひと吹きします",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 3,
      advice:
        "- 肥料を10g、土の表面全体にまきましょう。\n- 最初の1回は、苗を植えてから2～3週間後を目安にします",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 4,
      advice:
        "- 実が先端からだんだん赤く色づき、熟しはじめます\n- ヘタ付近まで赤くなったら、いよいよ収穫です。",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 5,
      advice:
        "- 手でトマトの実を支えながら、園芸用ハサミで軸を切りましょう\n- できるだけ軸の実に近い部分を短く切るようにしましょう\n- ",
    },
  ]);
}
