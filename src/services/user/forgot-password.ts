import { PrismaClient } from "@prisma/client"
import { BadRequestError } from "../../errors/BadRequest.js"
import { generateResetToken } from "../../utils/generateResetToken.js"
import { sendMail } from "../../utils/sendMail.js"
import { InternalServerError } from "../../errors/InternalServer.js"


const prisma = new PrismaClient()

export const forgotPasswordService = async (email: string): Promise<void> => {
    try {
        await prisma.$connect()
        const user = await prisma.user.findFirst({ where: { email } })
        if( !user ) {
            throw BadRequestError('User not found')
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

        sendMail(email, 'Reset your password', `To reset your password, click here: ${process.env.SITE_URL}/reset-password/${resetToken}`)
        
        // const response = "Email was sent to "+user.email
    } catch (error) {
        throw InternalServerError(error.message)
    } finally {
        await prisma.$disconnect()
    }
}