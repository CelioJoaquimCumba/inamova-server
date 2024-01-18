import { Request, Response } from "express-serve-static-core"
import { Quiz } from "../../models/quiz.model.js"
import { getQuizService } from "../../services/quiz/get-quiz.js"
import { Question } from "@prisma/client"
import { BadRequestError } from "../../errors/BadRequest.js"
export const getQuiz = async (req: Request, res: Response) => {
    try {
        const { id } = req.query
        if (!id) {
            throw BadRequestError('Quiz id is required')
        }
        if (typeof(id) !== 'string') {
            throw BadRequestError('Quiz id must be a string')
        }
        const quiz: Array<Question> = await getQuizService(id)
        res.status(200).send(quiz)
    } catch(e) {
        res.status(e.statusCode || 500).send({message: e.message})
    }
}