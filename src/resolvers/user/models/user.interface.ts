import { Document, Model } from 'mongoose';

export interface IUser {
  name: string;
  lastName: string;
  ctrlNumber: string;
  password: string;
  email: string;
}
export interface ICreateUserInput {
  name: string;
  lastName: string;
  ctrlNumber: string;
  password: string;
  email: string;
}

export interface ICredentials {
  ctrlNumber: string;
  password: string;
}
export interface IUserSession {
  ctrlNumber: string;
  token: string;
}

export interface IUserDocument extends Document, IUser {
  comparePassword: (pass: string) => boolean;
}

export interface IUserModel extends Model<IUserDocument> {}
