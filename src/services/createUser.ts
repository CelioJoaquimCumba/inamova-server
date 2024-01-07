import { PrismaClient } from '@prisma/client'
import { createHash } from 'crypto'

const prisma = new PrismaClient()

export const createUserService = async (email: string, password: string, phone: string, name: string) => {
    const hashedPassword = createHash('sha256').update(password).digest('hex')
    try {
        await prisma.$connect()
        if (await prisma.user.findFirst({ where: { email } })) {
            throw new Error('User already exists')
        }

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                phone,
                name
            }
        })

        return user
    } catch (error) {
        throw error
    } finally {
        await prisma.$disconnect()
    }
}
