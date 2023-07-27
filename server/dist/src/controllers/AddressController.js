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
exports.compareAddress = exports.deleteAddress = exports.createAddress = exports.getAllAddresses = exports.getAddressById = void 0;
const Address_1 = __importDefault(require("../models/Address"));
function getAddressById(addressId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Address_1.default.findById(addressId).exec();
    });
}
exports.getAddressById = getAddressById;
function getAllAddresses() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Address_1.default.find({}).exec();
    });
}
exports.getAllAddresses = getAllAddresses;
function createAddress(street, int_number, ext_number, colony, municipality, state) {
    return __awaiter(this, void 0, void 0, function* () {
        const newAddress = {
            street,
            int_number: int_number,
            ext_number: ext_number,
            colony,
            municipality,
            state
        };
        return yield Address_1.default.create(newAddress);
    });
}
exports.createAddress = createAddress;
function deleteAddress(addressId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Address_1.default.deleteOne({ _id: addressId });
    });
}
exports.deleteAddress = deleteAddress;
function compareAddress(newAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        const currentSavedAddresses = yield getAllAddresses();
        for (let i = 0; i < currentSavedAddresses.length; i += 1) {
            const { street, int_number, ext_number, colony, municipality, state } = currentSavedAddresses[i];
            const savedAddressWithoutId = {
                street,
                int_number,
                ext_number,
                colony,
                municipality,
                state
            };
            const newAddressWithoutId = {
                street: newAddress.street,
                int_number: newAddress.int_number,
                ext_number: newAddress.ext_number,
                colony: newAddress.colony,
                municipality: newAddress.municipality,
                state: newAddress.state
            };
            const savedAddressKeys = Object.keys(savedAddressWithoutId);
            const newObjectKeys = Object.keys(newAddressWithoutId);
            if (savedAddressKeys.length !== newObjectKeys.length) {
                return '';
            }
            if (areSameValues(savedAddressKeys, savedAddressWithoutId, newAddressWithoutId)) {
                return currentSavedAddresses[i]._id;
            }
            return '';
        }
        return '';
    });
}
exports.compareAddress = compareAddress;
function areSameValues(savedAddressKeys, savedAddress, newAddress) {
    for (const key of savedAddressKeys) {
        switch (key) {
            case 'street':
                if (savedAddress.street !== newAddress.street) {
                    return false;
                }
                break;
            case 'int_number':
                if (savedAddress.int_number.toString() !== newAddress.int_number.toString()) {
                    return false;
                }
                break;
            case 'ext_number':
                if (savedAddress.ext_number.toString() !== newAddress.ext_number.toString()) {
                    return false;
                }
                break;
            case 'colony':
                if (savedAddress.colony !== newAddress.colony) {
                    return false;
                }
                break;
            case 'municipality':
                if (savedAddress.municipality !== newAddress.municipality) {
                    return false;
                }
                break;
            default:
                if (savedAddress.state !== newAddress.state) {
                    return false;
                }
                break;
        }
    }
    return true;
}
