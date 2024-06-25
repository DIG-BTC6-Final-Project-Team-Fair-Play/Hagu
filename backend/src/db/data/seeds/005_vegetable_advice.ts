import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("vegetable_advice").del();

  // Inserts seed entries
  await knex("vegetable_advice").insert([
    {
      vegetable_id: 1,
      growing_stage_no: 1,
      advice:
        "時期: 気温が安定し、霜の心配がなくなった春（4月下旬〜5月中旬）が最適です。\nポイント:\n場所: 日当たりが良く、風通しが良い場所を選びます。土壌は排水性が良く、肥沃な場所が適しています。\n土壌準備: 定植の2〜3週間前に堆肥と元肥を施し、土を良く耕します。ピーマンは酸性土壌を嫌うため、必要ならば石灰をまいてpHを調整します。\n間隔: 苗同士の間隔は約50cm、列間は70〜80cmを目安にします。これにより、十分なスペースを確保できます。",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 2,
      advice:
        "時期: 定植後1〜2か月程度で開花が始まります。\nポイント:\n水やり: 土壌が乾かないように適度に水やりを行いますが、過湿に注意します。特に開花期は水分管理が重要です。\n追肥: 最初の花が咲き始めたら、追肥を開始します。チッソ、リン酸、カリウムをバランスよく含んだ肥料を使い、定期的に施します。\n支柱立て: 開花と共に株が大きくなるため、風で倒れないように支柱を立てて支えます。",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 3,
      advice:
        "時期: 開花後、1〜2週間で小さな果実が見え始めます。\nポイント:\n害虫防除: アブラムシやハダニなどの害虫が発生しやすくなるため、定期的にチェックし、見つけ次第対策を講じます。\n摘心: 上部の芽を摘むことで、側枝の発生を促し、果実の付き方を良くします。",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 4,
      advice:
        "時期: 着果から約40〜50日で果実が色付き始めます。\nポイント:\n温度管理: 特に夏場の高温対策が重要です。高温障害を避けるため、必要に応じて日よけを設けます。\n病気対策: カビや腐敗病に注意し、風通しを良くして病気の発生を防ぎます。必要ならば適切な農薬を使用します。\n収穫前追肥: 色付きが始まる前に、最後の追肥を行い、果実の成長を促進します。",
    },
    {
      vegetable_id: 1,
      growing_stage_no: 5,
      advice:
        "時期: 果実が完全に色付き、肉厚で光沢が出たら収穫時期です。\nポイント:収穫方法: ハサミを使って、果実の付け根を切ります。無理に引っ張らず、丁寧に収穫します。\n収穫頻度: 成熟した果実は次々と収穫します。定期的に収穫することで、新しい果実の成長を促します。\n保存: 収穫後は冷暗所で保存し、なるべく早く消費します。冷蔵庫に保存する場合は、乾燥を防ぐためにビニール袋に入れると良いです。\n各ステージで適切な管理を行うことで、健康で美味しいピーマンを育てることができます。",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 1,
      advice: "なすの定植に適したアドバイス",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 2,
      advice: "なすの開花に適したアドバイス",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 3,
      advice: "なすの着果に適したアドバイス",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 4,
      advice: "なすの色付に適したアドバイス",
    },
    {
      vegetable_id: 2,
      growing_stage_no: 5,
      advice: "なすの収穫に適したアドバイス",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 1,
      advice: "トマトの定植に適したアドバイス",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 2,
      advice: "トマトの開花に適したアドバイス",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 3,
      advice: "トマトの着果に適したアドバイス",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 4,
      advice: "トマトの色付に適したアドバイス",
    },
    {
      vegetable_id: 3,
      growing_stage_no: 5,
      advice: "トマトの収穫に適したアドバイス",
    },
  ]);
}
