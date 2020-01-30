import { BaseModel } from './base.model';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Client extends BaseModel {
  static tableName = 'clients';

  @Field(type => ID)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;
}
