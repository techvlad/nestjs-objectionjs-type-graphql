import { Global, Module } from '@nestjs/common';
import { Model } from 'objection';
import * as Knex from 'knex';
import * as KnexConfig from '../../knexfile';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';
import { Client } from './models/client';
import { SurgeonModel } from './models/surgeon.model';

const models = [Client, SurgeonModel];

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
