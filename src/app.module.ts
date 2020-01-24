import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { Client } from './client/client.entity';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Client],
      synchronize: true,
    }),
    ClientModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
