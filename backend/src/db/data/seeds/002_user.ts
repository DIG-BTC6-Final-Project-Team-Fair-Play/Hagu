import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      user_name: "banchan",
      line_id: "U80a60229dc4d5a8a1a0bff25c5c36504",
      picture:
        "https://profile.line-scdn.net/0hxfqICQElJ0lMMDPsWDlYHnB1KSQ7HiEBNFRhe2g2enljBjVKcFJuJzk2Li1jBjRLIgNsLTs3Lnxp",
    },
    {
      user_name: "takuma",
      line_id: "Ua7174e236d6a33fd27747ffc57b5ca78",
      picture:
        "https://profile.line-scdn.net/0hQMGeG-FbDmJ6HCWAq35xNUZZAA8NMggqAipDB1xLVQVUJR5kQ3xFV19OAFoCJE0yTnhEUQsYVgJf'",
    },
  ]);
}
