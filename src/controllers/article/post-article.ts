import { Request, Response } from "express-serve-static-core";
import { createArticleService } from "../../services/article/post-article.js"; // Make sure to import the correct service function
import { BadRequestError } from "../../errors/BadRequest.js";

export const createArticle = async (req: Request, res: Response) => {
    try {
        const articleData = req.body;

        // Check if request body contains article data
        if (!articleData || typeof articleData !== 'object') {
            throw BadRequestError('Article data is required and must be an object');
        }

        // Call the createArticleService function to create the article
        const createdArticle = await createArticleService(articleData);

        // Send the created article as a response
        res.status(201).send(createdArticle);
    } catch (e) {
        // Handle errors and send an appropriate response
        res.status(e.statusCode || 500).send({ message: e.message });
    }
};
