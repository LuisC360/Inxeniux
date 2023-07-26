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
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const ApiRouter_1 = __importDefault(require("./src/routers/ApiRouter"));
const config_1 = __importDefault(require("./config/config"));
const app = (0, express_1.default)();
const whitelist = ['http://localhost:3000'];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if ((origin != null && whitelist.indexOf(origin) !== -1) || origin == null) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));
app.options('*', (0, cors_1.default)());
mongoose_1.default
    .set('strictQuery', true)
    .connect(`mongodb+srv://${config_1.default.MONGO_USER}:${config_1.default.MONGO_PASSWORD}@cluster0.kcjhflf.mongodb.net/${config_1.default.MONGO_DB}?retryWrites=true&w=majority`)
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    app.use('/api', ApiRouter_1.default);
    const port = process.env.PORT || 5001;
    const server = app.listen(port);
    server.timeout = 1000 * 60 * 60;
    console.log('-------------------------');
    console.log(`Listening at port `, port);
    console.log('-------------------------');
}))
    .catch((error) => {
    console.log(error.message);
});
