import { loginUserService } from "../services/loginUserService.js"

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    try {
        const token = await loginUserService(email, password)
        return res.status(200).json(token)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}