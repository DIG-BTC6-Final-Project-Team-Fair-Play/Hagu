import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("photos").del();

  // Inserts seed entries
  await knex("photos").insert([
    {
      id: 1,
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F2.png?alt=media&token=adcbe803-ba27-4bb1-90bc-8d72a8038018",
      // date: "2024-06-25 10:00:00",
    },
    {
      id: 2,
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F3.png?alt=media&token=08cb2e30-6f34-4866-8dc1-0ccbd2bfe4e8",
      // date: "2024-06-25 11:00:00",
    },
    {
      id: 3,
      seedling_id: 2,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F4.png?alt=media&token=1af2962d-9813-4266-add4-9ea5bf857083",
      // date: "2024-06-25 12:00:00",
    },
  ]);
}
