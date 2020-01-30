import * as Knex from 'knex';
import { Model } from 'objection';
import { ClientModel } from '../models/client.model';
import { SurgeonModel } from '../models/surgeon.model';

export async function seed(knex: Knex): Promise<void> {
  Model.knex(knex);
  await ClientModel.query().insert([
    {
      firstName: 'Eric',
      lastName: 'Dixon',
      email: 'eric.dixon@example.com',
    },
    {
      firstName: 'Grace',
      lastName: 'Campbell',
      email: 'grace.campbell@example.com',
    },
    {
      firstName: 'Kay',
      lastName: 'Scott',
      email: 'kay.scott@example.com',
    },
    {
      firstName: 'Emma',
      lastName: 'Collins',
      email: 'emma.collins@example.com',
    },
  ]);

  await SurgeonModel.query().insert([
    {
      fullName: 'Calvin Hunter',
      yearsOfExperience: 1,
    },
    {
      fullName: 'Camila Ramirez',
      yearsOfExperience: 3,
    },
    {
      fullName: 'Teresa Moore',
      yearsOfExperience: 5,
    },
  ]);
}
