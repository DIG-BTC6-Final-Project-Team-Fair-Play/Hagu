import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    { id: 1, user_name: "banchan" },
    { id: 2, user_name: "macchan" },
    { id: 3, user_name: "otuichi" },
  ]);
}
