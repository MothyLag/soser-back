"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
const typedi_1 = require("typedi");
const data_schema_1 = require("./models/data.schema");
let DataService = class DataService {
    createDataForm(student, newData) {
        console.log('this is function');
        return new data_schema_1.DataModel(Object.assign(Object.assign({}, newData), { student })).save();
    }
};
DataService = __decorate([
    typedi_1.Service()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map