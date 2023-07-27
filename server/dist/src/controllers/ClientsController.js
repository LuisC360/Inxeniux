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
exports.deleteClients = exports.createClient = exports.getClientsByAddressId = exports.getClients = exports.getClientById = exports.getAllClients = void 0;
const Address_1 = __importDefault(require("../models/Address"));
const Client_1 = __importDefault(require("../models/Client"));
const Interests_1 = __importDefault(require("../models/Interests"));
function getAllClients() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Client_1.default.find({}).exec();
    });
}
exports.getAllClients = getAllClients;
function getClientById(clientId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Client_1.default.findOne({ _id: clientId }).exec();
    });
}
exports.getClientById = getClientById;
function getClients(clientIds) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Client_1.default.find({ _id: { $in: clientIds } }).exec();
    });
}
exports.getClients = getClients;
function getClientsByAddressId(addressId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Client_1.default.find({ address: addressId }).exec();
    });
}
exports.getClientsByAddressId = getClientsByAddressId;
function createClient(name, first_last_name, second_last_name, age, gender, address, interests) {
    return __awaiter(this, void 0, void 0, function* () {
        const newClient = {
            name,
            first_last_name,
            second_last_name,
            age,
            gender,
            address,
            interests
        };
        return yield Client_1.default.create(newClient);
    });
}
exports.createClient = createClient;
function deleteClients(clientIds) {
    return __awaiter(this, void 0, void 0, function* () {
        const ids = [...clientIds];
        const firstClientForDeletion = yield getClientById(ids[0]);
        const clientsForDeletion = yield getClients(ids);
        const clientsWithSameAddress = yield getClientsByAddressId(firstClientForDeletion === null || firstClientForDeletion === void 0 ? void 0 : firstClientForDeletion._id);
        if (firstClientForDeletion != null && ids.length > 1) {
            const IdsOfClientsWithSameAddress = clientsWithSameAddress.map((client) => client._id);
            // If we have users with the same address, check if they aren't the same ones,
            // if they are, delete the address too
            if (ids.length > 1 && firstClientForDeletion.address != null && areArraysSimilar(ids, IdsOfClientsWithSameAddress)) {
                yield Address_1.default.deleteOne({ _id: firstClientForDeletion.address });
            }
            for (let i = 0; i < ids.length; i += 1) {
                yield Interests_1.default.deleteOne({ _id: clientsForDeletion[i].interests }).exec();
                yield Client_1.default.deleteOne({ _id: clientIds[i] });
            }
        }
        else if (ids.length === 1 && firstClientForDeletion != null) {
            if (clientsWithSameAddress.length === 0) {
                yield Address_1.default.deleteOne({ _id: firstClientForDeletion.address }).exec();
            }
            yield Interests_1.default.deleteOne({ _id: firstClientForDeletion.interests }).exec();
            yield Client_1.default.deleteOne({ _id: clientIds[0] }).exec();
        }
    });
}
exports.deleteClients = deleteClients;
function areArraysSimilar(usersForDeletion, usersWithSameAddress) {
    if (usersForDeletion.length !== usersWithSameAddress.length) {
        return false;
    }
    for (let i = 0; i < usersForDeletion.length; i++) {
        if (usersForDeletion[i] !== usersWithSameAddress[i]) {
            return false;
        }
    }
    return true;
}
