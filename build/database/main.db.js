"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class DataBase {
    constructor() {
        this.URI = process.env.DB_URL
            ? process.env.DB_URL
            : 'mongodb://localhost:27017/soserdb';
    }
    connect() {
        mongoose_1.default
            .connect(process.env.MONGODB_URI || this.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
            .then((connect) => console.log('connected to mongodb..'))
            .catch((e) => console.log('could not connect to mongodb', e));
    }
    startTransaction$() {
        return rxjs_1.from(mongoose_2.startSession()).pipe(operators_1.concatMap((session) => rxjs_1.of(session.startTransaction()).pipe(operators_1.map(() => session))));
    }
    commitTransaction$(session) {
        return rxjs_1.from(session.commitTransaction());
    }
}
exports.DataBase = DataBase;
//# sourceMappingURL=main.db.js.map