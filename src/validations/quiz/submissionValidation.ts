import { BadRequestError } from "../../errors/BadRequest.js"

type Submition = {
    score: number
    total: number
    userId: string
    quizId: string
}

export const validateSubmission = ({score, total, userId, quizId}: Submition) : Boolean => {
    try {
        if( !score || !total || !userId || !quizId) {
            throw BadRequestError('All fields are required')
        }
        if (score > total) {
            throw BadRequestError('Score cannot be greater than total')
        }
        if( typeof(score) !== 'number' || typeof(total) !== 'number') {
            throw BadRequestError('Score and total must be numbers')
        }
        if( typeof(userId) !== 'string' || typeof(quizId) !== 'string') {
            throw BadRequestError('User id and quiz id must be strings')
        }
        return true
    } catch(error) {
        throw error
    }
}