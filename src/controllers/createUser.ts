import { createUserService } from "../services/createUser.js"

export const createUser = async (req, res) => {
    const { email, password, phone, name } = req.body
    if (!email || !password || !phone || !name) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    try {
        const user = await createUserService(email, password, phone, name)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}