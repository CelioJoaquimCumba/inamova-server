import { forgotPasswordService } from "../../services/user/forgot-password.js"
import { EmailValidation } from "../../validations/index.js"


export const forgotPassword = async (req, res) => {
    const { email }: { email: string } = req.body
    if (!email) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    if (!EmailValidation(email)) {
        return res.status(400).json({ message: 'Invalid email' })
    }
    try {
        await forgotPasswordService(email.toLocaleLowerCase())
        return res.status(200).json({ message: 'Email sent' })
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message })
    }
}