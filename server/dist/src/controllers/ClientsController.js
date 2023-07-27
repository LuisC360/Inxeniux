"use strict";
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
exports.deleteClients = exports.createClient = exports.getAllClients = void 0;
const Client_1 = __importDefault(require("../models/Client"));
function getAllClients() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Client_1.default.find({}).exec();
    });
}
exports.getAllClients = getAllClients;
function createClient(name, first_last_name, second_last_name, age, gender, address) {
    return __awaiter(this, void 0, void 0, function* () {
        const newClient = {
            name,
            first_last_name,
            second_last_name,
            age,
            gender,
            address
        };
        return yield Client_1.default.create(newClient);
    });
}
exports.createClient = createClient;
function deleteClients(clientIds) {
    return __awaiter(this, void 0, void 0, function* () {
        const ids = [...clientIds];
        // Delete address, but first check if a user has the same address
        // for (let a = 0; a < ids.length; a += 1) {}
        for (let i = 0; i < ids.length; i += 1) {
            yield Client_1.default.deleteOne({ _id: clientIds[i] });
        }
    });
}
exports.deleteClients = deleteClients;
