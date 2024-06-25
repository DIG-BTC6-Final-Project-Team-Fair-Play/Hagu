import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("seedlings", (t) => {
    t.increments("id").primary();
    t.integer("user_id");
    t.foreign("user_id").references("users.id");

    t.integer("vegetable_id");
    t.foreign("vegetable_id").references("vegetables.id");
    t.integer("growing_stage_no");
    t.datetime("last_watering");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("seedlings");
}
