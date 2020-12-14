import { Field, InputType } from 'type-graphql';

@InputType()
export class UserLoginInput {
  @Field(() => String)
  ctrlNumber: string;

  @Field(() => String)
  password: string;
}
