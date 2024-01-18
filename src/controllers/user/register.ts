import { registerService } from "../../services/user/register.js"
import { EmailValidation, PasswordValidation, PhoneValidation, NameValidation } from "../../validations/user/index.js"
import { Request, Response } from "express"

export const register = async (req: Request, res: Response) => {
    const { email, password, phone, name } : { email: string, password: string, phone: string, name: string} = req.body
    if (!email || !password || !phone || !name) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    if (!EmailValidation(email)) {
        return res.status(400).json({ message: 'Invalid email' })
    }
    if ( !PasswordValidation(password)) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character' })
    }
    if (!NameValidation(name)) {
        return res.status(400).json({ message: 'Name must be at least 3 characters long and contain only letters' })
    }
    if (!PhoneValidation(phone)) {
        return res.status(400).json({ message: 'Invalid phone number' })
    }
    try {
        const {username, token} = await registerService(email.toLowerCase(), password, phone, name)
        return res.status(201).json({username, token})
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}