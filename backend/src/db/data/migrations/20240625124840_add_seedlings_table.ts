import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("seedlings", (t) => {
    t.string("seedling_name");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("seedlings", (t) => {
    t.dropColumn("seedling_name");
  });
}
