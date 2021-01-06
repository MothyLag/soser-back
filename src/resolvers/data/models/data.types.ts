import { Document, Model } from 'mongoose';
import { IUser } from '../../user/models/user.interface';

export interface IData {
  student: string | IUser;
  studentName: string;
  studentGender: string;
  studentPhone: string;
  studentAddress: string;
  studentAge: number;
  ctrlNumber: string;
  career: string;
  creditsNumber: number;
  creditsPercent: number;
}

export interface INewDataDTO {
  studentName: string;
  studentGender: string;
  studentPhone: string;
  studentAddress: string;
  studentAge: number;
  ctrlNumber: string;
  career: string;
  creditsNumber: number;
  creditsPercent: number;
}

export interface IDataDocument extends Document, IData {}

export interface IDataModel extends Model<IDataDocument> {}
