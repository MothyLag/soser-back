"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const path = __importStar(require("path"));
const main_db_1 = require("./database/main.db");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = new main_db_1.DataBase();
        yield db.connect();
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [__dirname + '/resolvers/*/*.resolver.*s'],
            validate: true,
            emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
            container: typedi_1.Container,
        });
        const server = new apollo_server_1.ApolloServer({
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
                }
                else {
                    return ctx;
                }
            },
        });
        const PORT = process.env.PORT || 4000;
        const { url } = yield server.listen(PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map