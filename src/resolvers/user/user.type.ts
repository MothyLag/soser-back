import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  ctrlNumber: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  email: string;
}
