import { changePasswordService } from "../../services/user/change-password.js"

export const changePassword = async (req, res) => {
    const { email, token, password } = req.body
    if (!token || !password || !email) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    try {
        await changePasswordService(token, password, email)
        return res.status(200).json({ message: 'Password changed successfully' })
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message })
    }
}