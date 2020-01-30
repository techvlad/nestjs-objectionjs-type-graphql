import { Controller, Get, Inject } from '@nestjs/common';
import { ModelClass } from 'objection';
import { ClientModel } from './database/models/client.model';

@Controller()
export class AppController {
  constructor(
    @Inject('ClientModel') private readonly cityModel: ModelClass<ClientModel>,
  ) {}

  @Get()
  async index() {
    return this.cityModel.query();
  }
}
