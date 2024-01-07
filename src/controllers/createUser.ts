import { createUserService } from "../services/createUser.js"

export const createUser = async (req, res) => {
    const { email, password, phone, name } = req.body
    if (!email || !password || !phone || !name) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    try {
        await createUserService(email, password, phone, name)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    return res.status(201).json({ message: 'User created successfully' })
}