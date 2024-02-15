import { Request, Response } from "express";
import { Article } from "../../models/article.model.js";
import { getArticlesService } from "../../services/article/get-articles.js";
import { BadRequestError } from "../../errors/BadRequest.js";

export const getArticles = async (req: Request, res: Response) => {
    try {
        const {id} = req.query
        if(!id || typeof(id) !== "string") throw BadRequestError("Subject id missing")
        const articles: Article[] = await getArticlesService(id)
        res.status(200).send(articles)
    } catch(e) {
        res.status(500).send({message: e.message})
    }
}