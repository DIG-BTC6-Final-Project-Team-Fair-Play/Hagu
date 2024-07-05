import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("vegetables", (t) => {
    t.increments("id").primary();
    t.string("label");
    t.text("description");
    t.string("content");
    t.string("equipment_list");
    t.text("image");
    t.integer("planting_start");
    t.integer("planting_end");
    t.integer("harvest_start");
    t.integer("harvest_end");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("vegetables");
}
