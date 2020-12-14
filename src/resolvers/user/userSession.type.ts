import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class UserSession {
  @Field(() => String)
  ctrlNumber: string;

  @Field(() => String)
  token: string;
}
