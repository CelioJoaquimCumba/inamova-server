import { PrismaClient } from '@prisma/client'
import { createHash } from 'crypto'
import { user } from '../../models/user.model.js'
import { generateHash } from '../../utils/generateHash.js'
import { BadRequestError } from '../../errors/BadRequest.js'
import { InternalServerError } from '../../errors/InternalServer.js'

const prisma = new PrismaClient()

export const registerService = async ( email, password, phone, name ) => {
    const hashedPassword = generateHash(password)
    try {
        await prisma.$connect()
        if (await prisma.user.findFirst({ where: { email } })) {
            throw BadRequestError('User already exists')
        }

        const user: user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                phone,
                name
            }
        })

        return { id: user.id, name: user.name}
    } catch (error) {
        throw InternalServerError(error.message)
    } finally {
        await prisma.$disconnect()
    }
}
