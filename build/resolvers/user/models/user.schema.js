"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const options = {
    timestamps: true,
};
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    ctrlNumber: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 4,
    },
    email: {
        type: String,
        unique: true,
        required: false,
    },
    picture: {
        type: String,
        required: false,
    },
}, options);
userSchema.methods.comparePassword = function (pass) {
    return this.password === pass;
};
exports.userModel = mongoose_1.model('user', userSchema);
//# sourceMappingURL=user.schema.js.map