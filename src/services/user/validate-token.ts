import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken';
import { BadRequestError } from "../../errors/BadRequest.js";

const prisma = new PrismaClient()
export const validateTokenService = async( token: string) : Promise<boolean> => {
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(decoded) {
            return true
        } else {
            return false
        }

    } catch(e) {
        throw BadRequestError(e.message)
    }
}