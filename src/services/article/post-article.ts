import { PrismaClient } from "@prisma/client";
import { Article } from "../../models/article.model.js";
import { BadRequestError } from "../../errors/BadRequest.js";

const prisma = new PrismaClient();

export const createArticleService = async (articleData: Article): Promise<Article> => {
    try {
        await prisma.$connect();

        // Use the Prisma create method to add a new article to the database
        const createdArticle = await prisma.article.create({
            data: articleData,
        });

        return createdArticle;
    } catch (e) {
        throw BadRequestError('Error creating article: ' + e.message);
    } finally {
        await prisma.$disconnect();
    }
};
