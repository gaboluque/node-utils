"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const customError_1 = require("../errors/customError");
const errorHandler = (error, req, res, next) => {
    if (error instanceof customError_1.CustomError) {
        return res.status(error.statusCode).json({ errors: error.serializeErrors() });
    }
    res.status(400).send({
        errors: [{ message: "Something went wrong!" }]
    });
};
exports.errorHandler = errorHandler;
