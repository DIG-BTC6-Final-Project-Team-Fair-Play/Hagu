/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("sample").del();
  await knex("sample").insert([
    { sample: "サンプルデータだよ1" },
    { sample: "サンプルデータだよ2" },
    { sample: "サンプルデータだよ3" },
  ]);
};
