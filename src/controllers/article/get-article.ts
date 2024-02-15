import { Request, Response } from "express-serve-static-core";
import { getArticleService } from "../../services/article/get-article.js";
import { BadRequestError } from "../../errors/BadRequest.js";

export const getArticle = async (req: Request, res: Response) => {
    try {
        const { id } = req.query;

        // Check if 'id' parameter is missing or not a string
        if (!id || typeof id !== 'string') {
            throw BadRequestError('Article id is required and must be a string');
        }

        // Call the getArticleService function to retrieve the article
        const article = await getArticleService(id);

        // Check if the article is not found
        if (!article) {
            throw BadRequestError('Article not found');
        }

        // Send the article as a response
        res.status(200).send(article);
    } catch (e) {
        // Handle errors and send an appropriate response
        res.status(e.statusCode || 500).send({ message: e.message });
    }
};
