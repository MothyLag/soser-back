import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { getUserId } from '../../middlewares/session.middleware';
import { DataService } from './data.service';
import { Data } from './data.type';
import { CreateDataInput } from './inputs/createData.input';

@Resolver()
export class DataResolver {
  constructor(private readonly dataService: DataService) {}

  @Mutation(() => Data)
  @UseMiddleware(getUserId)
  createData(@Ctx() ctx: any, @Arg('newData') newData: CreateDataInput) {
    const userId = ctx.res.locals.userId;
    return this.dataService.createDataForm(userId, newData);
  }
}
