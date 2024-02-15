import { Router } from "express";
import { getArticles, getArticle, createArticle } from "../controllers/article/index.js";
import authMiddleware from "../middleware/authMiddleWare.js";

export const articleRouter = Router()

articleRouter.use(authMiddleware)

articleRouter.get("/all",  getArticles)

articleRouter.get("/", getArticle)

articleRouter.post("/create", createArticle)

