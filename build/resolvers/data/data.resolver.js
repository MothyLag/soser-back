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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataResolver = void 0;
const type_graphql_1 = require("type-graphql");
const session_middleware_1 = require("../../middlewares/session.middleware");
const data_service_1 = require("./data.service");
const data_type_1 = require("./data.type");
const createData_input_1 = require("./inputs/createData.input");
let DataResolver = class DataResolver {
    constructor(dataService) {
        this.dataService = dataService;
    }
    createData(ctx, newData) {
        const userId = ctx.res.locals.userId;
        return this.dataService.createDataForm(userId, newData);
    }
};
__decorate([
    type_graphql_1.Mutation(() => data_type_1.Data),
    type_graphql_1.UseMiddleware(session_middleware_1.getUserId),
    __param(0, type_graphql_1.Ctx()), __param(1, type_graphql_1.Arg('newData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createData_input_1.CreateDataInput]),
    __metadata("design:returntype", void 0)
], DataResolver.prototype, "createData", null);
DataResolver = __decorate([
    type_graphql_1.Resolver(),
    __metadata("design:paramtypes", [data_service_1.DataService])
], DataResolver);
exports.DataResolver = DataResolver;
//# sourceMappingURL=data.resolver.js.map