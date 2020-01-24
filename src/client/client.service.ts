import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly photoRepository: Repository<Client>,
  ) {}

  async findAll(): Promise<Client[]> {
    return this.photoRepository.find();
  }
}
