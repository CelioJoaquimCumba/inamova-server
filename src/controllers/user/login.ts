import { loginService } from "../../services/user/login.js"
import { EmailValidation, PasswordValidation } from "../../validations/index.js"



export const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    if (!EmailValidation(email)) {
        return res.status(400).json({ message: 'Invalid email' })
    }
    if ( !PasswordValidation(password)) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character' })
    }
    try {
        const token = await loginService(email, password)
        return res.status(200).json(token)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}