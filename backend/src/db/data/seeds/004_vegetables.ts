import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("vegetables").del();

  // Inserts seed entries
  await knex("vegetables").insert([
    {
      label: "ピーマン",
      description: "種植え時期５月くらい",
      content: "ピーマンのコツ",
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
    },
    {
      label: "なす",
      description: "種植え時期6月くらい",
      content: "ピーマンのコツ",
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
    },
    {
      label: "トマト",
      description: "種植え時期7月くらい",
      content: "ピーマンのコツ",
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
    },
  ]);
}
