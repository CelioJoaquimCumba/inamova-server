import { changePasswordService } from "../../services/user/change-password.js"
import { EmailValidation, PasswordValidation } from "../../validations/user/index.js"
import { Request, Response } from "express"

export const changePassword = async (req: Request, res: Response) => {
    const { email, token, password }: { email: string, token: string, password: string } = req.body
    if (!token || !password || !email) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' }) // All fields are required
    }
    if (!EmailValidation(email)) {
        return res.status(400).json({ message: 'E-mail inválido' }) // Invalid email
    }
    if (!PasswordValidation(password)) {
        return res.status(400).json({ message: 'A senha deve ter pelo menos 8 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial' }) // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character
    }
    try {
        await changePasswordService(token, password, email.toLowerCase())
        return res.status(200).json({ message: 'Senha alterada com sucesso' }) // Password changed successfully
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message })
    }
}
