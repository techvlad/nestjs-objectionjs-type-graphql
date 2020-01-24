import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, ID } from 'type-graphql';

@Entity()
@ObjectType()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  @Field(type => ID)
  id: string;

  @Field()
  @Column('text')
  email: string;
}
