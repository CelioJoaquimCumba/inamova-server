import { forgotPasswordService } from "../../services/user/forgot-password.js"

export const forgotPassword = async (req, res) => {
    const { email } = req.body
    if (!email) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    try {
        await forgotPasswordService(email)
        return res.status(200).json({ message: 'Email sent' })
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message })
    }
}