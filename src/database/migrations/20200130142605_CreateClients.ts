import * as Knex from 'knex';

const tableName = 'clients';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, t => {
    t.bigIncrements('id');
    t.text('first_name');
    t.text('last_name');
    t.text('email');
    t.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(tableName);
}
