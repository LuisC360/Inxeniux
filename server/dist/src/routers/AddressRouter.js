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
const express_1 = __importDefault(require("express"));
const ErrorController_1 = require("../controllers/ErrorController");
const AddressController_1 = require("../controllers/AddressController");
const router = express_1.default.Router();
// get
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addressId = req.body;
        const address = yield (0, AddressController_1.getAddress)(addressId);
        res.json(address);
    }
    catch (error) {
        (0, ErrorController_1.errorCallback)(error, res);
    }
}));
// add
router.post('/add-address', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = req.body;
        (0, AddressController_1.createAddress)(address.street, address.int_number, address.ext_number, address.colony, address.municipality, address.state);
    }
    catch (error) {
        (0, ErrorController_1.errorCallback)(error, res);
    }
}));
// edit
router.put('/edit-address', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        (0, ErrorController_1.errorCallback)(error, res);
    }
}));
// delete
router.delete('/delete-address', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addressId = req.body;
        (0, AddressController_1.deleteAddress)(addressId);
    }
    catch (error) {
        (0, ErrorController_1.errorCallback)(error, res);
    }
}));
exports.default = router;
