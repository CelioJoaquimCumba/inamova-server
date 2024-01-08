import { loginService } from "../../services/user/login.js"

export const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    try {
        const token = await loginService(email, password)
        return res.status(200).json(token)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}