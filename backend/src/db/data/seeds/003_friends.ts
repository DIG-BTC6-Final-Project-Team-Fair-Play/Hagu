import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("friends").del();

  // Inserts seed entries
  await knex("friends").insert([
    { user_id: 1, friend_id: 2 },
    { user_id: 2, friend_id: 1 },
  ]);
}
