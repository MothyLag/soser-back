import { model, Schema, SchemaOptions } from 'mongoose';
import { IUserDocument, IUserModel } from './user.interface';
const options = {
  timestamps: true,
} as SchemaOptions;
const userSchema = new Schema<IUserDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    ctrlNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
      maxlength:4
    },
    email: {
      type: String,
      unique: true,
      required: false,
    },
  },
  options
);

userSchema.methods.comparePassword = function (pass: string) {
  return this.password === pass;
};

export const userModel: IUserModel = model<IUserDocument>('user', userSchema);
