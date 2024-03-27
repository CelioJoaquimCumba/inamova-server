import { registerService } from "../../services/user/register.js"
import { EmailValidation, PasswordValidation, PhoneValidation, NameValidation } from "../../validations/user/index.js"
import { Request, Response } from "express"

export const register = async (req: Request, res: Response) => {
    const { email, password, phone, name }: { email: string, password: string, phone: string, name: string } = req.body

    // Verifica se algum dos campos obrigatórios está faltando
    if (!email || !password || !phone || !name) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
    }

    // Valida o formato do e-mail
    if (!EmailValidation(email)) {
        return res.status(400).json({ message: 'E-mail inválido' })
    }

    // Valida o formato da senha
    if (!PasswordValidation(password)) {
        return res.status(400).json({
            message: 'A senha deve ter pelo menos 8 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial'
        })
    }

    // Valida o formato do nome
    if (!NameValidation(name)) {
        return res.status(400).json({ message: 'O nome deve ter pelo menos 3 caracteres e conter apenas letras' })
    }

    // Valida o formato do telefone
    if (!PhoneValidation(phone)) {
        return res.status(400).json({ message: 'Número de telefone inválido' })
    }

    try {
        // Chama o serviço de registro com o e-mail em minúsculas, senha, telefone e nome
        const { username, token, id } = await registerService(email.toLowerCase(), password, phone, name)

        // Retorna a resposta de registro bem-sucedida com nome de usuário, token e ID
        return res.status(201).json({ username, token, id })
    } catch (error) {
        // Retorna erro interno do servidor com mensagem de erro se o serviço de registro lançar um erro
        return res.status(500).json({ message: error.message })
    }
}
