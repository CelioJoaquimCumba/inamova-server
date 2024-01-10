import { changePasswordService } from "../../services/user/change-password.js"
import { EmailValidation, PasswordValidation } from "../../validations/index.js"


export const changePassword = async (req, res) => {
    const { email, token, password } = req.body
    if (!token || !password || !email) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    if (!EmailValidation(email)) {
        return res.status(400).json({ message: 'Invalid email' })
    }
    if ( !PasswordValidation(password)) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character' })
    }
    try {
        await changePasswordService(token, password, email)
        return res.status(200).json({ message: 'Password changed successfully' })
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message })
    }
}