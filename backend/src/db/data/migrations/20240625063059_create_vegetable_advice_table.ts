import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("vegetable_advice", (t) => {
    t.integer("vegetable_id");
    t.integer("growing_stage_no");
    t.text("advice");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("vegetable_advice");
}
