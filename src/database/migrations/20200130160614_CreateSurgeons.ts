import * as Knex from 'knex';

const tableName = 'surgeons';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, t => {
    t.bigIncrements('id');
    t.string('full_name');
    t.integer('years_of_experience');
    t.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(tableName);
}
