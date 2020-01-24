import { Controller, Get } from '@nestjs/common';
import { ClientService } from './client/client.service';

@Controller()
export class AppController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getHello() {
    return this.clientService.findAll();
  }
}
