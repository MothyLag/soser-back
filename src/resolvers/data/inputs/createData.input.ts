import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateDataInput {
  @Field(() => String)
  studentName: string;

  @Field(() => String)
  studentGender: string;

  @Field(() => String)
  studentPhone: string;

  @Field(() => String)
  studentAddress: string;

  @Field(() => Number)
  studentAge: number;

  @Field(() => String)
  ctrlNumber: string;

  @Field(() => String)
  career: string;

  @Field(() => Number)
  creditsNumber: number;

  @Field(() => Number)
  creditsPercent: number;

  @Field(() => String)
  companyName: string;

  @Field(() => String)
  companyAddress: string;

  @Field(() => String)
  companyPhone: string;

  @Field(() => String)
  companyRFC: string;

  @Field(() => String)
  companyDepartment: string;

  @Field(() => String)
  headDepartment: string;
}
