import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const listActionHistories = async (req: Request, res: Response) => {
    try {
        const { userId, page = 1, limit = 10 } = req.query;
        const where = userId ? { userId: Number(userId) } : {};
        const offset = (Number(page) - 1) * Number(limit);

        const histories = await prisma.actionHistory.findMany({
            where,
            skip: offset,
            take: Number(limit),
        });

        res.status(200).json(histories);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({ error: errorMessage });
    }
};
