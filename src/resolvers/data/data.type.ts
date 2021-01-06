import { Field, ID, ObjectType } from 'type-graphql';
import { User } from '../user/user.type';

@ObjectType()
export class Data {
  @Field(() => ID)
  _id: string;

  @Field(() => User)
  student: User;

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
