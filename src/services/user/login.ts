import { PrismaClient } from "@prisma/client"
import { createHash } from "crypto"
import jwt from "jsonwebtoken"
import { BadRequestError } from "../../errors/BadRequest.js"
import { InternalServerError } from "../../errors/InternalServer.js"

const prisma = new PrismaClient()
export const loginService = async (email: string, password: string): Promise<{username:string, token: string, id:string}> => {
    const hashedPassword = createHash('sha256').update(password).digest('hex')
    try {
        await prisma.$connect()
        const user = await prisma.user.findFirst({ where: { email, password: hashedPassword } })
        if (!user) {
            throw BadRequestError('Invalid email or password')
        }
        const username = user.name
        const id = user.id
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY , { expiresIn: process.env.JWT_EXPIRES })
        return {username, token,id}
    } catch (error) {
        throw InternalServerError(error.message)
    } finally {
        await prisma.$disconnect()
    }
}