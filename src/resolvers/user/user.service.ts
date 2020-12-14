import { Service } from 'typedi';
import { from } from 'rxjs';
import { userModel } from './models/user.schema';
import { concatMap, map } from 'rxjs/operators';
import {
  ICreateUserInput,
  ICredentials,
  IUserSession,
} from './models/user.interface';
import { sign } from 'jsonwebtoken';
@Service()
export class UserService {
  public helloWorld() {
    return 'Hello World';
  }

  private _userCtrlExist(ctrlNumber: string) {
    return from(userModel.find({ ctrlNumber }).exec()).pipe(
      map((users) => users.length > 0 && users != null)
    );
  }

  private _userEmailExist(email: string) {
    return from(userModel.find({ email }).exec()).pipe(
      map((users) => users.length > 0 && users != null)
    );
  }

  public async createUser(newUser: ICreateUserInput) {
    return await from(this._userCtrlExist(newUser.ctrlNumber))
      .pipe(
        map((exist) => {
          if (exist) throw new Error('número de control usado');
        }),
        concatMap(() => this._userEmailExist(newUser.email)),
        map(async (exist) => {
          if (exist) throw new Error('email usado');
          return await (await userModel.create(newUser)).save();
        }),
        map(async (user) => {
          const { ctrlNumber } = await user;
          return {
            ctrlNumber,
            token: sign({ id: (await user)._id }, 'mothySecret'),
          } as IUserSession;
        })
      )
      .toPromise();
  }

  public async loginUser(credentials: ICredentials) {
    const { ctrlNumber, password } = credentials;
    return await from(this._userCtrlExist(credentials.ctrlNumber))
      .pipe(
        map(async (exist) => {
          if (exist) return await userModel.findOne({ ctrlNumber }).exec();
          else throw Error('el número de control no fue encontrado');
        }),
        map(async (user) => {
          if ((await user).comparePassword(password))
            return {
              ctrlNumber,
              token: sign({ id: (await user)._id }, 'mothySecret'),
            } as IUserSession;
          else throw Error('contraseña incorrecta');
        })
      )
      .toPromise();
  }
}
