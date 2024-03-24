import { checkPasswordTokenService } from "../../services/user/check-password-token.js"
import { EmailValidation, PasswordValidation } from "../../validations/user/index.js"
import { Request, Response } from "express"

export const checkPasswordToken = async (req: Request, res: Response) => {
    const { email, token, password }: { email: string, token: string, password: string } = req.body
    if (!token || !email) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    if (!EmailValidation(email)) {
        return res.status(400).json({ message: 'Invalid email' })
    }
    try {
        await checkPasswordTokenService(token,email.toLowerCase())
        return res.status(200).json({ message: 'Valid Token!' })
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message })
    }
}