import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("friends", (t) => {
    t.increments("id").primary();
    t.integer("user_id");
    t.foreign("user_id").references("users.id");

    t.integer("friend_id");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("friends");
}
