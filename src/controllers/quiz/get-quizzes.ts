import { Request, Response } from "express";
import { Quiz } from "../../models/quiz.model.js";
import { getQuizzesService } from "../../services/quiz/get-quizzes.js";

export const getQuizzes = async (req: Request, res: Response) => {
    try {
        const quizzes: Quiz[] = await getQuizzesService()
        res.status(200).send(quizzes)
    } catch(e) {
        res.status(500).send(e)
    }
}