import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("vegetables").del();

  // Inserts seed entries
  await knex("vegetables").insert([
    {
      id: 1,
      vegetable_name: "ピーマン",
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
      id: 2,
      vegetable_name: "なす",
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
      id: 3,
      vegetable_name: "トマト",
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
