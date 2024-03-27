import { loginService } from "../../services/user/login.js"
import { EmailValidation } from "../../validations/user/index.js"
import { Request, Response } from "express"

export const login = async (req: Request, res: Response) => {
    const { email, password }: { email: string, password: string } = req.body

    // Verifica se o e-mail ou a senha estão faltando
    if (!email || !password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
    }

    // Valida o formato do e-mail
    if (!EmailValidation(email)) {
        return res.status(400).json({ message: 'E-mail inválido' })
    }

    try {
        // Chama o serviço de login com o e-mail em minúsculas e a senha
        const { username, token, id } = await loginService(email.toLowerCase(), password)
        
        // Retorna a resposta de login bem-sucedida com nome de usuário, token e ID
        return res.status(200).json({ username, token, id })
    } catch (error) {
        // Retorna erro interno do servidor com mensagem de erro se o serviço de login lançar um erro
        return res.status(500).json({ message: error.message })
    }
}
