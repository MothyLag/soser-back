import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import * as path from 'path';
import { DataBase } from './database/main.db';
import { authDrive } from './drive/configuration';
import { google } from 'googleapis';

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
      const { req, connection } = ctx;
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
  function listFiles(auth) {
    const drive = google.drive({ version: 'v3', auth });
    drive.files.list(
      {
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
      },
      (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const files = res.data.files;
        if (files.length) {
          console.log('Files:');
          files.map((file) => {
            console.log(`${file.name} (${file.id})`);
          });
        } else {
          console.log('No files found.');
        }
      }
    );
  }
  const PORT = process.env.PORT || 4000;
  const { url } = await server.listen(PORT);
  authDrive();
  console.log(`running on ${url}`);
}
bootstrap();
