import { Document, Model } from 'mongoose';
import { Stream } from 'stream';

export interface IUser {
  name: string;
  lastName: string;
  ctrlNumber: string;
  password: string;
  email: string;
  picture?: string;
}

export interface IUploadFile {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

export interface SavedFile {
  filename: string;
  filePath: string;
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
