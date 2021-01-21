import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import * as path from 'path';
import { DataBase } from './database/main.db';

async function bootstrap() {
  const db = new DataBase();
  await db.connect();

  const schema = await buildSchema({
    resolvers: [__dirname + '/resolvers/*/*.resolver.*s'],
    validate: true,
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    container: Container,
  });
  const server = new ApolloServer({
    schema,
    playground: true,
    introspection: true,
    subscriptions: {
      path: '/subscriptions',
    },
    context: (ctx) => {
      const { _, connection } = ctx;
      if (connection) {
        return {
          req: { headers: { authorization: connection.context.Authorization } },
          res: { locals: { userId: '' } },
        };
      } else {
        return ctx;
      }
    },
  });

  const PORT = process.env.PORT || 4000;
  const { url } = await server.listen(PORT);
}
bootstrap();
