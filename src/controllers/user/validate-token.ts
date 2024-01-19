import { Request, Response } from "express";
import { validateTokenService } from "../../services/user/validate-token.js";

export const validateToken = async ( req: Request, res: Response) => {
    const {token}: {token: string} = req.body

    try {
        if(!token) {
            return res.status(400).json({ message: 'Token is required' })
        }
        const isValid = await validateTokenService(token)

        return res.status(200).json({ isValid })
    } catch(error) {
        return res.status(error.statusCode || 500).json({ message: error.message })
    }

}