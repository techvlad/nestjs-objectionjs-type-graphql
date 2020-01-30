import { Controller, Get, Inject } from '@nestjs/common';
import { ModelClass } from 'objection';
import { Client } from './database/models/client';

@Controller()
export class AppController {
  constructor(
    @Inject('Client') private readonly cityModel: ModelClass<Client>,
  ) {}

  @Get()
  async index() {
    return this.cityModel.query();
  }
}
