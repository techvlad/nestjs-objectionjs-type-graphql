import { Global, Module } from '@nestjs/common';
import { Model } from 'objection';
import * as Knex from 'knex';
import * as KnexConfig from '../../knexfile';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';
import { ClientModel } from './models/client.model';

const models = [ClientModel];

const modelProviders = models.map(model => {
  return {
    provide: model.name,
    useValue: model
  };
});

const providers: Provider[] = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      // Setup Objection.js
      const knex = Knex(KnexConfig);
      Model.knex(knex);

      console.log(knex.client.config)

      // Run migrations
      await knex.migrate.latest();

      return knex;
    }
  }
];

@Global()
@Module({
  exports: [...providers],
  providers: [...providers],
})
export class DatabaseModule {}
