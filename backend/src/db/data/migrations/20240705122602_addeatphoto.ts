import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("seedlings", (t) => {
    t.text("eat_photo_url");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("seedlings", (t) => {
    t.dropColumn("eat_photo_url");
  });
}
