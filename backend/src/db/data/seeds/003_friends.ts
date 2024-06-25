import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("friends").del();

  // Inserts seed entries
  await knex("friends").insert([
    { id: 1, user_id: 1, friend_id: 2 },
    { id: 2, user_id: 1, friend_id: 3 },
    { id: 3, user_id: 2, friend_id: 1 },
    { id: 4, user_id: 2, friend_id: 3 },
    { id: 5, user_id: 3, friend_id: 1 },
    { id: 6, user_id: 3, friend_id: 2 },
  ]);
}
