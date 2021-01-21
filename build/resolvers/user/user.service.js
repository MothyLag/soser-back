"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const typedi_1 = require("typedi");
const rxjs_1 = require("rxjs");
const user_schema_1 = require("./models/user.schema");
const fs_1 = require("fs");
const operators_1 = require("rxjs/operators");
const jsonwebtoken_1 = require("jsonwebtoken");
const fs_2 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const configuration_1 = require("../../drive/configuration");
const methods_1 = require("../../drive/methods");
let UserService = class UserService {
    helloWorld() {
        return 'Hello World';
    }
    _userCtrlExist(ctrlNumber) {
        return rxjs_1.from(user_schema_1.userModel.find({ ctrlNumber }).exec()).pipe(operators_1.map((users) => users.length > 0 && users != null));
    }
    _userEmailExist(email) {
        return rxjs_1.from(user_schema_1.userModel.find({ email }).exec()).pipe(operators_1.map((users) => users.length > 0 && users != null));
    }
    createUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield rxjs_1.from(this._userCtrlExist(newUser.ctrlNumber))
                .pipe(operators_1.map((exist) => {
                if (exist)
                    throw new Error('número de control usado');
            }), operators_1.concatMap(() => this._userEmailExist(newUser.email)), operators_1.map((exist) => __awaiter(this, void 0, void 0, function* () {
                if (exist)
                    throw new Error('email usado');
                return yield (yield user_schema_1.userModel.create(newUser)).save();
            })), operators_1.map((user) => __awaiter(this, void 0, void 0, function* () {
                const { ctrlNumber } = yield user;
                return {
                    ctrlNumber,
                    token: jsonwebtoken_1.sign({ id: (yield user)._id }, 'mothySecret'),
                };
            })))
                .toPromise();
        });
    }
    loginUser(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ctrlNumber, password } = credentials;
            return yield rxjs_1.from(this._userCtrlExist(credentials.ctrlNumber))
                .pipe(operators_1.map((exist) => __awaiter(this, void 0, void 0, function* () {
                if (exist)
                    return yield user_schema_1.userModel.findOne({ ctrlNumber }).exec();
                else
                    throw Error('el número de control no fue encontrado');
            })), operators_1.map((user) => __awaiter(this, void 0, void 0, function* () {
                if ((yield user).comparePassword(password))
                    return {
                        ctrlNumber,
                        token: jsonwebtoken_1.sign({ id: (yield user)._id }, 'mothySecret'),
                    };
                else
                    throw Error('contraseña incorrecta');
            })))
                .toPromise();
        });
    }
    getUserInfo(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_schema_1.userModel.findById(userId).exec();
        });
    }
    _uploadFile({ createReadStream, filename }, idUser) {
        const patch = path_1.default.normalize(__dirname + `/../../../public/files/${idUser}`);
        if (!fs_2.default.existsSync(patch))
            fs_2.default.mkdirSync(patch);
        const extention = path_1.default.extname(filename);
        const filePath = path_1.default.normalize(`${patch}/${filename}`);
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            createReadStream().pipe(fs_1.createWriteStream(filePath)
                .on('finish', () => resolve({ filePath, filename }))
                .on('error', (e) => {
                console.log(e);
                reject(false);
            }));
        }));
    }
    _base64_encode(file) {
        const bitmap = fs_2.default.readFileSync(file, 'base64');
        return bitmap;
    }
    uploadPicture(file, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileSaved = yield this._uploadFile(file, idUser);
            if (fileSaved !== false) {
                yield user_schema_1.userModel
                    .findByIdAndUpdate(idUser, {
                    picture: fileSaved.filePath,
                })
                    .exec();
                return fileSaved.filePath;
            }
            else
                throw new Error('Ocurrió un error mientras se subia el archivo');
        });
    }
    uploadReport(file, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            configuration_1.authDrive(methods_1.uploadFile(file));
            return idUser;
        });
    }
    getUserPicture(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_schema_1.userModel.findById(idUser).exec();
            return user.picture ? this._base64_encode(user.picture) : 'nopicture';
        });
    }
};
UserService = __decorate([
    typedi_1.Service()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map