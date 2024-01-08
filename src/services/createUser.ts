import { PrismaClient } from '@prisma/client'
import { createHash } from 'crypto'
import { user } from '../models/user.model.js'

const prisma = new PrismaClient()

export const createUserService = async ( email, password, phone, name ) => {
    const hashedPassword = createHash('sha256').update(password).digest('hex')
    try {
        await prisma.$connect()
        if (await prisma.user.findFirst({ where: { email } })) {
            throw new Error('User already exists')
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
        throw error
    } finally {
        await prisma.$disconnect()
    }
}
