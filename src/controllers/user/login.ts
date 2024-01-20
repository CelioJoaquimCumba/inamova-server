import { loginService } from "../../services/user/login.js"
import { EmailValidation } from "../../validations/user/index.js"
import { Request, Response } from "express"


export const login = async (req: Request, res: Response) => {
    const { email, password } : { email: string, password: string } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    if (!EmailValidation(email)) {
        return res.status(400).json({ message: 'Invalid email' })
    }
    try {
        const {username, token,id} = await loginService(email.toLowerCase(), password)
        return res.status(200).json({username, token,id})
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}