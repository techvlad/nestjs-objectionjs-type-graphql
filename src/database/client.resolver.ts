import { Resolver, Query, Args, Info } from '@nestjs/graphql';
import { Inject, NotFoundException } from '@nestjs/common';
import { ModelClass } from 'objection';
import { Client } from './models/client';

@Resolver(of => Client)
export class ClientResolver {
  constructor(
    @Inject('Client') private readonly clientModel: ModelClass<Client>
  ) {}

  @Query(returns => Client)
  async getClientById(@Args('id') id: number) {
    const client = await this.clientModel.query().findById(id);
    if (!client) {
      throw new NotFoundException(id);
    }
    return client;
  }

  @Query(returns => [Client])
  async clients() {
    return this.clientModel.query().select();
  }
}
