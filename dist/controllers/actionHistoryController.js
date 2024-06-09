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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listActionHistories = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listActionHistories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, page = 1, limit = 10 } = req.query;
        const where = userId ? { userId: Number(userId) } : {};
        const offset = (Number(page) - 1) * Number(limit);
        const histories = yield prisma.actionHistory.findMany({
            where,
            skip: offset,
            take: Number(limit),
        });
        res.status(200).json(histories);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({ error: errorMessage });
    }
});
exports.listActionHistories = listActionHistories;
