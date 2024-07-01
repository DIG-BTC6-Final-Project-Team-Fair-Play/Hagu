import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("users", (t) => {
    t.text("picture");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("users", (t) => {
    t.dropColumn("picture");
  });
}
