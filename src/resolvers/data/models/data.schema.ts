import { model, Schema, SchemaOptions } from 'mongoose';
import { IDataDocument, IDataModel } from './data.types';
const options = {
  timestamps: true,
} as SchemaOptions;

const dataSchema = new Schema<IDataDocument>(
  {
    student: { type: Schema.Types.ObjectId, ref: 'user' },
    studentName: { type: String, required: true },
    studentGender: { type: String, required: true },
    studentPhone: { type: String, required: true },
    studentAddress: { type: String, required: true },
    studentAge: { type: Number, required: true },
    ctrlNumber: { type: String, required: true },
    career: { type: String, required: true },
    creditsNumber: { type: Number, required: true },
    creditsPercent: { type: Number, required: true },
    companyName: { type: String, required: true },
    companyAddress: { type: String, required: true },
    companyPhone: { type: String, required: true },
    companyRFC: { type: String, required: true },
    companyDepartment: { type: String, required: true },
    headDepartment: { type: String, required: true },
  },
  options
);

export const DataModel: IDataModel = model<IDataDocument>('data', dataSchema);
