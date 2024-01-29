import { Request, Response } from "express";
import { validateTokenService } from "../../services/user/validate-token.js";
import { getStatsService } from "../../services/user/get-stats.js"

export const getStats = async (req: Request, res: Response) => {
    const { id } = req.query
    if(!id ) return res.status(400).json({message: 'id is required'})
    if(typeof(id) !== "string") return res.status(400).json({message: 'id must be a string value'})
    try {

        const stats = await getStatsService(id)

        return res.status(200).json(stats)


    } catch(e) {
        console.log(e.message)
        return res.status(e.statusCode || 500).json({message: e.message})
    }
}