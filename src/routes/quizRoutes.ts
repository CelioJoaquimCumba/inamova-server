import { Router } from "express";
import { getQuizzes, getQuiz, submitResult } from "../controllers/quiz/index.js";
import authMiddleware from "../middleware/authMiddleWare.js";

export const quizRouter = Router()

quizRouter.use(authMiddleware)

quizRouter.get("/all",  getQuizzes)

quizRouter.get("/", getQuiz)

quizRouter.post("/submit", submitResult)