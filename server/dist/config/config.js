"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const process_1 = require("process");
dotenv_1.default.config({
    path: path_1.default.resolve(process.cwd(), `environments/${(_a = process_1.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.trim()}.env`)
});
exports.default = {
    MONGO_USER: 'luiscorona',
    MONGO_PASSWORD: 'vbNyCeuCwVNEPcGV',
    MONGO_DB: 'InxeniuxQA'
};
