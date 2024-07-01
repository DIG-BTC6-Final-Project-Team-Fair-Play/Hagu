import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("seedlings").del();

  // Inserts seed entries
  await knex("seedlings").insert([
    {
      user_id: 1,
      vegetable_id: 1,
      growing_stage_no: 1,
      last_watering: "2024-06-25 10:00:00",
      seedling_name: "苗ろう",
    },
    {
      user_id: 1,
      vegetable_id: 2,
      growing_stage_no: 2,
      last_watering: "2024-06-25 11:00:00",
      seedling_name: "苗る",
    },
    {
      user_id: 2,
      vegetable_id: 3,
      growing_stage_no: 3,
      last_watering: "2024-06-25 12:00:00",
      seedling_name: "苗み",
    },
  ]);
}
