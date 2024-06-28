import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("eat_photos").del();

  // Inserts seed entries
  await knex("eat_photos").insert([
    {
      id: 1,
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F5.png?alt=media&token=b9842764-ba01-4d13-89fa-0b67d657ba26",
      // date: "2024-06-25 10:00:00",
    },
    {
      id: 2,
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F6.png?alt=media&token=885cc0e0-97c5-4f47-9d3c-470b573b7fae",
      // date: "2024-06-25 11:00:00",
    },
    {
      id: 3,
      seedling_id: 2,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%86%E3%82%99%E3%82%B5%E3%82%99%E3%82%A4%E3%83%B3%20(1).png?alt=media&token=01b5f281-a1a1-425f-b7d9-b70876b9b697",
      // date: "2024-06-25 12:00:00",
    },
  ]);
}
