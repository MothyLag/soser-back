import { MiddlewareFn } from 'type-graphql';
import { verify } from 'jsonwebtoken';

interface IToken {
  id: string;
}

export const getUserId: MiddlewareFn<any> = async (_, next) => {
  const { id } = verify(
    _.context.req.headers.authorization.split(' ')[1],
    'mothySecret'
  ) as IToken;
  _.context.res.locals.userId = id;
  return await next();
};
