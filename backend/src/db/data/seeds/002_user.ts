import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    { user_name: "banchan" },
    { user_name: "macchan" },
    { user_name: "otuichi" },
  ]);
}
