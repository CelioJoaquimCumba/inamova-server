import { Request, Response } from "express"
import { validateSubmission } from "../../validations/quiz/submissionValidation.js"
import { submitResultService } from "../../services/quiz/submit-result.js"
export const submitResult = async (req: Request, res: Response) => {
    try {
        const { quizId, userId } : { quizId: string, score: number, total: number, userId: string} = req.body
        const score = Number(req.body.score)
        const total = Number(req.body.total)
    
        validateSubmission({score, total, userId, quizId})


        await submitResultService(quizId, score, total, userId)
        return res.status(200).json({ message: 'Result submitted successfully' })
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message })
    }
}