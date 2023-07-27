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
const ClientsController_1 = require("../controllers/ClientsController");
const AddressController_1 = require("../controllers/AddressController");
const InterestsController_1 = require("../controllers/InterestsController");
const router = express_1.default.Router();
// get
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allClients = yield (0, ClientsController_1.getAllClients)();
        res.json(allClients);
    }
    catch (error) {
        (0, ErrorController_1.errorCallback)(error, res);
    }
}));
// add
router.post('/add-client', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { client, address, interests } = req.body;
        const idOfSameAddress = yield (0, AddressController_1.compareAddress)(address);
        const interestsOfClient = yield (0, InterestsController_1.createInterests)(interests.personalInterests, interests.preferredDestinations, interests.roomType, interests.monthlyIncome, interests.yearlyTravels, interests.favoriteBooks);
        if (idOfSameAddress !== '') {
            (0, ClientsController_1.createClient)(client.name, client.first_last_name, client.second_last_name, client.age, client.gender, idOfSameAddress, interestsOfClient._id);
        }
        else {
            const addressOfClient = yield (0, AddressController_1.createAddress)(address.street, address.int_number, address.ext_number, address.colony, address.municipality, address.state);
            (0, ClientsController_1.createClient)(client.name, client.first_last_name, client.second_last_name, client.age, client.gender, addressOfClient._id, interestsOfClient._id);
        }
    }
    catch (error) {
        (0, ErrorController_1.errorCallback)(error, res);
    }
}));
// edit
router.put('/edit-client', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        (0, ErrorController_1.errorCallback)(error, res);
    }
}));
// delete
router.delete('/delete-client', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientsIds = req.body;
        (0, ClientsController_1.deleteClients)(clientsIds);
    }
    catch (error) {
        (0, ErrorController_1.errorCallback)(error, res);
    }
}));
exports.default = router;
