"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const unauthorizedError_1 = require("../errors/unauthorizedError");
const requireAuth = (req, res, next) => {
    if (!req.currentUser)
        throw new unauthorizedError_1.UnauthorizedError();
    next();
};
exports.requireAuth = requireAuth;
