"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const customError_1 = require("./customError");
class UnauthorizedError extends customError_1.CustomError {
    constructor() {
        super("Not authorized");
        this.statusCode = 401;
        // Only because we are extending a built-in class
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
    serializeErrors() {
        return [{ message: "Not authorized" }];
    }
}
exports.UnauthorizedError = UnauthorizedError;
