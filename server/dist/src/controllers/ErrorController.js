"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorCallback = void 0;
function errorCallback(error, res) {
    console.log(error.message);
    res.status(400);
    res.json({
        success: false,
        message: error.message
    });
}
exports.errorCallback = errorCallback;
