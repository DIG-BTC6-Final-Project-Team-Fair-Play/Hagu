import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("photos", (t) => {
    t.increments("id").primary();
    t.integer("seedling_id");
    t.foreign("seedling_id").references("seedlings.id");

    t.text("photo_data");
    t.datetime("date");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("photos");
}
