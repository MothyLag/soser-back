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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const type_graphql_1 = require("type-graphql");
const user_type_1 = require("../user/user.type");
let Data = class Data {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Data.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(() => user_type_1.User),
    __metadata("design:type", user_type_1.User)
], Data.prototype, "student", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], Data.prototype, "studentName", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], Data.prototype, "studentGender", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], Data.prototype, "studentPhone", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], Data.prototype, "studentAddress", void 0);
__decorate([
    type_graphql_1.Field(() => Number),
    __metadata("design:type", Number)
], Data.prototype, "studentAge", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], Data.prototype, "ctrlNumber", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], Data.prototype, "career", void 0);
__decorate([
    type_graphql_1.Field(() => Number),
    __metadata("design:type", Number)
], Data.prototype, "creditsNumber", void 0);
__decorate([
    type_graphql_1.Field(() => Number),
    __metadata("design:type", Number)
], Data.prototype, "creditsPercent", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], Data.prototype, "companyName", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], Data.prototype, "companyAddress", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], Data.prototype, "companyPhone", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], Data.prototype, "companyRFC", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], Data.prototype, "companyDepartment", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], Data.prototype, "headDepartment", void 0);
Data = __decorate([
    type_graphql_1.ObjectType()
], Data);
exports.Data = Data;
//# sourceMappingURL=data.type.js.map