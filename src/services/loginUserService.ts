import { PrismaClient } from "@prisma/client"
import { createHash } from "crypto"

const prisma = new PrismaClient()
export const loginUserService = async (email: string, password: string) => {
    const hashedPassword = createHash('sha256').update(password).digest('hex')
    try {
        await prisma.$connect()
        const user = await prisma.user.findFirst({ where: { email, password: hashedPassword } })
        if (!user) {
            throw new Error('Invalid credentials')
        }
    } catch (error) {
        throw error
    } finally {
        await prisma.$disconnect()
    }
}