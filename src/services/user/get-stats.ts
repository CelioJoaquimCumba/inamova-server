import { PrismaClient } from "@prisma/client";
import { BadRequestError } from "../../errors/BadRequest.js";
import jwt from 'jsonwebtoken';
import { NotFoundError } from "../../errors/NotFound.js";

const prisma = new PrismaClient()
export const getStatsService = async( id: string): Promise<{ passed: number; made: number; }> => {
    try {
        await prisma.$connect()
        
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        if(!user) throw NotFoundError("Usuário não encontrado")

        const made = await prisma.result.count({
            where: {
                userId: id
            }
        })
        const passed = await prisma.result.count({
            where: {
                userId: id,
                passed: true
            }
        })

        return {made, passed}
    } catch(e) {
        console.log(e)
        throw e
    }
}