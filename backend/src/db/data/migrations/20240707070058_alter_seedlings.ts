import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("seedlings", function (t) {
    // character設定
    t.string("character");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("seedlings", function (t) {
    t.dropColumn("character");
  });
}
