import { PrismaClient } from '@prisma/client'
import jwt from "jsonwebtoken"
import { User } from '../../models/user.model.js'
import { generateHash } from '../../utils/generateHash.js'
import { BadRequestError } from '../../errors/BadRequest.js'
import { InternalServerError } from '../../errors/InternalServer.js'

const prisma = new PrismaClient()

export const registerService = async ( email: string, password: string, phone: string, name: string ): Promise<{username: string, token:string, id: string}> => {
    const hashedPassword = generateHash(password)
    try {
        await prisma.$connect()
        if (await prisma.user.findFirst({ where: { email } })) {
            throw BadRequestError('Usuário já existe')
        }

        const user: User = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                phone,
                name
            }
        })
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY , { expiresIn: process.env.JWT_EXPIRES })
        return {username: name, token, id: user.id}
    } catch (error) {
        throw InternalServerError(error.message)
    } finally {
        await prisma.$disconnect()
    }
}
