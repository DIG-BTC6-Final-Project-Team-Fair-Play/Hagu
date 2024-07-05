import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("vegetables").del();

  // Inserts seed entries
  await knex("vegetables").insert([
    {
      label: "ピーマン",
      description: "苗植え時期5月 | 収穫期間約40日",
      content:
        "ピーマンはトウガラシの仲間なので虫や病気の心配が少なく、1株からたくさんの実が収穫できる初心者にも栽培しやすい野菜です。",
      equipment_list: JSON.stringify([
        "スコップ",
        "ピーマンの種",
        "培養土",
        "鉢底石",
        "化成肥料",
        "仮支柱",
        "本支柱",
        "麻紐",
        "園芸用はさみ",
      ]),
      image: "./images/01_icon.png",
      planting_start:5,
      planting_end:6,
      harvest_start:6,
      harvest_end:10,
    },
    {
      label: "なす",
      description: "苗植え時期5月 | 収穫期間約40日",
      content:
        "なすは、比較的簡単に育てられる、家庭菜園でも定番の野菜です。また春に植えれば夏に収穫でき、さらに秋なすとしても収穫できる楽しみも！",
      equipment_list: JSON.stringify([
        "スコップ",
        "なすの種",
        "培養土",
        "鉢底石",
        "化成肥料",
        "仮支柱",
        "本支柱",
        "麻紐",
        "園芸用はさみ",
      ]),
      image: "./images/02_icon.png",
      planting_start:5,
      planting_end:6,
      harvest_start:6,
      harvest_end:10,
    },
    {
      label: "トマト",
      description: "苗植え時期5月 | 収穫期間約60日",
      content:
        "4、5月頃に苗を植えると夏に収穫できるトマトは、手軽に育てられると人気の野菜です。",
      equipment_list: JSON.stringify([
        "スコップ",
        "トマトの種",
        "培養土",
        "鉢底石",
        "化成肥料",
        "仮支柱",
        "本支柱",
        "麻紐",
        "園芸用はさみ",
      ]),
      image: "./images/03_icon.png",
      planting_start:5,
      planting_end:6,
      harvest_start:6,
      harvest_end:11,
    },
  ]);
}
