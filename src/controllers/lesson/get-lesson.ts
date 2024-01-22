import { Request, Response } from "express-serve-static-core"
// import { getLessonService } from "../../services/lesson/get-lesson.js"
import { Question } from "@prisma/client"
import { BadRequestError } from "../../errors/BadRequest.js"
export const getLesson = async (req: Request, res: Response) => {
    try {
        const { id } = req.query
        if (!id) {
            throw BadRequestError('Lesson id is required')
        }
        if (typeof(id) !== 'string') {
            throw BadRequestError('Lesson id must be a string')
        }
        // const lesson: Array<Question> = await getLessonService(id)
        // res.status(200).send(lesson)
    } catch(e) {
        res.status(e.statusCode || 500).send({message: e.message})
    }
}