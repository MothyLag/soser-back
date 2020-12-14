import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  ctrlNumber: string;

  @Field(() => String)
  confirmPassword: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  email: string;
}
