"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModel = void 0;
const mongoose_1 = require("mongoose");
const options = {
    timestamps: true,
};
const dataSchema = new mongoose_1.Schema({
    student: { type: mongoose_1.Schema.Types.ObjectId, ref: 'user' },
    studentName: { type: String, required: true },
    studentGender: { type: String, required: true },
    studentPhone: { type: String, required: true },
    studentAddress: { type: String, required: true },
    studentAge: { type: Number, required: true },
    ctrlNumber: { type: String, required: true },
    career: { type: String, required: true },
    creditsNumber: { type: Number, required: true },
    creditsPercent: { type: Number, required: true },
    companyName: { type: String, required: true },
    companyAddress: { type: String, required: true },
    companyPhone: { type: String, required: true },
    companyRFC: { type: String, required: true },
    companyDepartment: { type: String, required: true },
    headDepartment: { type: String, required: true },
}, options);
exports.DataModel = mongoose_1.model('data', dataSchema);
//# sourceMappingURL=data.schema.js.map