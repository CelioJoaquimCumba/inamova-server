import { PrismaClient } from "@prisma/client"
import { BadRequestError } from "../../errors/BadRequest.js"
import { generateResetToken } from "../../utils/generateResetToken.js"
import { sendMail } from "../../utils/sendMail.js"
import { InternalServerError } from "../../errors/InternalServer.js"
import { getCurrentInterface } from "./interfaceIP.js"


const prisma = new PrismaClient()

export const forgotPasswordService = async (email: string): Promise<void> => {
    try {
        await prisma.$connect()
        const user = await prisma.user.findFirst({ where: { email } })
        if (!user) {
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

        const interfaceIP = getCurrentInterface()
        // const resetLink = `exp://${interfaceIP}:8081/reset-password/${resetToken}`
        const resetLink = `http://${interfaceIP}:5500`
        const mailOptions = {
            to: email,
            subject: 'Reset your password',
            text:"To reset your password, click here:",
            html: `<p>To reset your password, click here:</p> <a href="http://${interfaceIP}:5500/">link title</a>`
        };
        console.log(mailOptions.html)
        await sendMail(mailOptions);
        // const response = "Email was sent to "+user.email
    } catch (error) {
        throw InternalServerError(error.message)
    } finally {
        await prisma.$disconnect()
    }
}
