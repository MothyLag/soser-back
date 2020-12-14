import * as mongoose from 'mongoose';
import { startSession } from 'mongoose';
import { of, from } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

export class DataBase {
  //private readonly URI =
  //"mongodb+srv://MothyLag:100613@cluster0-cw6gu.mongodb.net/rutanet?retryWrites=true&w=majority";
  private readonly URI = 'mongodb://localhost:27017/soserdb';
  public connect() {
    mongoose
      .connect(process.env.MONGODB_URI || this.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((connect) => console.log('connected to mongodb..'))
      .catch((e) => console.log('could not connect to mongodb', e));
  }

  startTransaction$() {
    return from(startSession()).pipe(
      concatMap((session: mongoose.ClientSession) =>
        of(session.startTransaction()).pipe(map(() => session))
      )
    );
  }
  commitTransaction$(session: mongoose.ClientSession) {
    return from(session.commitTransaction());
  }
}
