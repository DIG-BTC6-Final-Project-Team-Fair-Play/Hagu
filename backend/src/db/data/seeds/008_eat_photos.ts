import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("eat_photos").del();

  // Inserts seed entries
  await knex("eat_photos").insert([
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo8.png?alt=media&token=daf19089-cad8-49b7-9945-c8ee6fb49084",
    },
  ]);
}
