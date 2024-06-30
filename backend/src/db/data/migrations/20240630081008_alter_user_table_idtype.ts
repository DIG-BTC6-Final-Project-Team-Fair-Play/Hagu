import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("users", (t) => {
    t.string("line_id").alter();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("users", (t) => {
    t.integer("line_id").alter();
  });
}
