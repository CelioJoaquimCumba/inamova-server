import { PrismaClient } from "@prisma/client"
import { Article } from "../../models/article.model.js"
import { BadRequestError } from "../../errors/BadRequest.js"
import { shuffleArray } from "../../utils/shuffle-array.js"

const prisma = new PrismaClient()

export const getArticleService = async (id: string): Promise<Article | null> => {
    try {
        await prisma.$connect()
        
        // Use findUnique to retrieve a single article based on its ID
        const article = await prisma.article.findUnique({
            where: { id }
        });

        if (!article) {
            throw BadRequestError('Article not found');
        }

        // Return the specific article
        return article;
    } catch (e) {
        throw e;
    } finally {
        await prisma.$disconnect();
    }
}
