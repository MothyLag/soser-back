import { GraphQLUpload } from 'graphql-upload';
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { getUserId } from '../../middlewares/session.middleware';
import { CreateUserInput } from './inputs/createUser.input';
import { UserLoginInput } from './inputs/loginUser.input';
import { IUploadFile } from './models/user.interface';
import { UserService } from './user.service';
import { User } from './user.type';
import { UserSession } from './userSession.type';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => String)
  public helloWorld() {
    return this.userService.helloWorld();
  }

  @Mutation(() => UserSession)
  public createUser(@Arg('user') newUser: CreateUserInput) {
    return this.userService.createUser(newUser);
  }

  @Query(() => UserSession)
  public login(@Arg('credentials') credentials: UserLoginInput) {
    return this.userService.loginUser(credentials);
  }
  @UseMiddleware(getUserId)
  @Query(() => User)
  public async getUserInfo(@Ctx() ctx: any) {}

  @Mutation(() => String)
  @UseMiddleware(getUserId)
  async uploadFile(
    @Ctx() ctx: any,
    @Arg('file', () => GraphQLUpload)
    file: IUploadFile
  ) {
    const userId: string = ctx.res.locals.userId;
    return this.userService.uploadPicture(file, userId);
  }

  @Mutation(() => String)
  @UseMiddleware(getUserId)
  async uploadReport(
    @Ctx() ctx: any,
    @Arg('file', () => GraphQLUpload)
    file: IUploadFile
  ) {
    const userId: string = ctx.res.locals.userId;
    return this.userService.uploadPicture(file, userId);
  }

  @Query(() => String)
  @UseMiddleware(getUserId)
  public getUserPicture(@Ctx() ctx: any) {
    const userId: string = ctx.res.locals.userId;
    return this.userService.getUserPicture(userId);
  }
}
