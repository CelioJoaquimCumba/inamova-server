import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken';
import { BadRequestError } from "../../errors/BadRequest.js";

const prisma = new PrismaClient()
export const validateTokenService = async( token: string) : Promise<boolean> => {
    try{
        await prisma.$connect()
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY) as { id: string }
        if(!decoded) {
            throw BadRequestError('Token inválido')
        }
        const user = await prisma.user.findUnique({ where: { id: decoded.id } })
        if(!user) {
            throw BadRequestError('Usuário não encontrado')
        }

        return true

    } catch(e) {
        throw BadRequestError(e.message)
    } finally {
        await prisma.$disconnect()
    }
}