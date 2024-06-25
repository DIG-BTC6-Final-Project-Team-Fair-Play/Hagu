import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("DIG", (t) => {
    t.increments("id").primary();
    t.text("memo");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("DIG");
}
