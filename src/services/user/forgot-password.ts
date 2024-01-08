import { PrismaClient } from "@prisma/client"
import { badRequestError } from "../../errors/BadRequest.js"
import { generateResetToken } from "../../utils/generateResetToken.js"
import { sendMail } from "../../utils/sendMail.js"


const prisma = new PrismaClient()

export const forgotPasswordService = async (email: string) => {
    try {
        await prisma.$connect()
        const user = await prisma.user.findFirst({ where: { email } })
        if( !user ) {
            throw badRequestError('User not found')
        }
        const resetToken = generateResetToken()
        const resetExpiry = new Date()
        resetExpiry.setHours(resetExpiry.getHours() + 1)

        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                resetToken,
                resetExpiry
            }
        })

        sendMail(email, 'Reset your password', `To reset your password, click here: http://localhost:3000/reset-password/${resetToken}`)

        return user
    } catch (error) {
        throw error
    } finally {
        await prisma.$disconnect()
    }
}