import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { ClientResolver } from './database/client.resolver';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true,
    })
  ],
  controllers: [AppController],
  providers: [ClientResolver],
})
export class AppModule {}
