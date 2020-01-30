import * as Knex from 'knex';
import { knexSnakeCaseMappers } from 'objection';

const config: Knex.Config = {
  client: 'pg',

  debug: true,

  connection: {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'postgres',
  },

  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
    stub: './src/database/migration.stub.ts',
  },
  seeds: {
    extension: 'ts',
    directory: './src/database/seeds',
    stub: './src/database/seed.stub.ts',
  },
  ...knexSnakeCaseMappers(),
};

module.exports = config;
