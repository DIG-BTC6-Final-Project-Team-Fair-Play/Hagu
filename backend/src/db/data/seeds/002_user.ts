import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      user_name: "ばんちゃん",
      line_id: "Ua7174e236d6a33fd27747ffc57b5ca78",
      picture:
        "https://profile.line-scdn.net/0hQMGeG-FbDmJ6HCWAq35xNUZZAA8NMggqAipDB1xLVQVUJR5kQ3xFV19OAFoCJE0yTnhEUQsYVgJf",
    },
    {
      user_name: "たくま",
      line_id: "U80a60229dc4d5a8a1a0bff25c5c36504",
      picture:
        "https://profile.line-scdn.net/0hxfqICQElJ0lMMDPsWDlYHnB1KSQ7HiEBNFRhe2g2enljBjVKcFJuJzk2Li1jBjRLIgNsLTs3Lnxp",
    },
    {
      user_name: "まっちゃん",
      line_id: "U8e9244a875e0254ab6cf98cf029df6af",
      picture:
        "https://profile.line-scdn.net/0hSgWDEB6-DEhqPRhVW09zH1Z4AiUdEwoAEl8QfktoUHtAX0geAwtCJkxqBXFEDh5OUlMTL0ltUH1E",
    },
    {
      user_name: "ずっか",
      line_id: "U072e0b8769621ce692d41ffd71a4a2fb",
      picture:
        "https://profile.line-scdn.net/0m0738eff67251b5ef345f9458fbf3f4a65b6ad1e0f478",
    },
    {
      user_name: "おついち",
      line_id: "U5deb27f8a3be36a3cd00f6bc4f88150e",
      picture:
        "https://profile.line-scdn.net/0hM0TXDdW9Eh9pIT5voMVtSFVkHHIeDxRXEUAPKUojTStGFlQeXUdZeEwpHC1FRFFBVxMNfk10HC4X",
    },
  ]);
}
