"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.UserResolver = void 0;
const graphql_upload_1 = require("graphql-upload");
const type_graphql_1 = require("type-graphql");
const session_middleware_1 = require("../../middlewares/session.middleware");
const createUser_input_1 = require("./inputs/createUser.input");
const loginUser_input_1 = require("./inputs/loginUser.input");
const user_service_1 = require("./user.service");
const user_type_1 = require("./user.type");
const userSession_type_1 = require("./userSession.type");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    helloWorld() {
        return this.userService.helloWorld();
    }
    createUser(newUser) {
        return this.userService.createUser(newUser);
    }
    login(credentials) {
        return this.userService.loginUser(credentials);
    }
    getUserInfo(ctx) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    uploadFile(ctx, file) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = ctx.res.locals.userId;
            return this.userService.uploadPicture(file, userId);
        });
    }
    uploadReport(ctx, file) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = ctx.res.locals.userId;
            return this.userService.uploadReport(file, userId);
        });
    }
    getUserPicture(ctx) {
        const userId = ctx.res.locals.userId;
        return this.userService.getUserPicture(userId);
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "helloWorld", null);
__decorate([
    type_graphql_1.Mutation(() => userSession_type_1.UserSession),
    __param(0, type_graphql_1.Arg('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_input_1.CreateUserInput]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "createUser", null);
__decorate([
    type_graphql_1.Query(() => userSession_type_1.UserSession),
    __param(0, type_graphql_1.Arg('credentials')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginUser_input_1.UserLoginInput]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "login", null);
__decorate([
    type_graphql_1.UseMiddleware(session_middleware_1.getUserId),
    type_graphql_1.Query(() => user_type_1.User),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserInfo", null);
__decorate([
    type_graphql_1.Mutation(() => String),
    type_graphql_1.UseMiddleware(session_middleware_1.getUserId),
    __param(0, type_graphql_1.Ctx()),
    __param(1, type_graphql_1.Arg('file', () => graphql_upload_1.GraphQLUpload)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "uploadFile", null);
__decorate([
    type_graphql_1.Mutation(() => String),
    type_graphql_1.UseMiddleware(session_middleware_1.getUserId),
    __param(0, type_graphql_1.Ctx()),
    __param(1, type_graphql_1.Arg('file', () => graphql_upload_1.GraphQLUpload)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "uploadReport", null);
__decorate([
    type_graphql_1.Query(() => String),
    type_graphql_1.UseMiddleware(session_middleware_1.getUserId),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getUserPicture", null);
UserResolver = __decorate([
    type_graphql_1.Resolver(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map