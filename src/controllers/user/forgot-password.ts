import { forgotPasswordService } from "../../services/user/forgot-password.js"
import { EmailValidation } from "../../validations/user/index.js"
import { Request, Response } from "express"

export const forgotPassword = async (req: Request, res: Response) => {
    const { email }: { email: string } = req.body
    if (!email) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' }) // All fields are required
    }
    if (!EmailValidation(email)) {
        return res.status(400).json({ message: 'E-mail inválido' }) // Invalid email
    }
    try {
        await forgotPasswordService(email.toLocaleLowerCase())
        return res.status(200).json({ message: 'E-mail enviado' }) // Email sent
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message })
    }
}
