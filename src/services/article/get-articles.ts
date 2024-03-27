import { PrismaClient } from "@prisma/client";
import { Article } from "../../models/article.model.js";
import { BadRequestError } from "../../errors/BadRequest.js";

const prisma = new PrismaClient()
export const getArticlesService = async (id:string): Promise<Array<Article>> => {
    try {
        await prisma.$connect()
        const articles = await prisma.article.findMany({
            where: {
                lessonId: id
            }
        })
        if(!articles) throw BadRequestError("Artigo não encontrado")
        return articles
    } catch(e) {
        throw e
    }finally {
        await prisma.$disconnect()
    }
}