import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { CreateUserInput } from './inputs/createUser.input';
import { UserLoginInput } from './inputs/loginUser.input';
import { UserService } from './user.service';
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
}
