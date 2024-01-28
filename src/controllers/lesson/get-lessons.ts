import { Request, Response } from "express";
import { Lesson } from "../../models/lesson.model.js";
import { getLessonsService } from "../../services/lesson/get-lessons.js";
import { BadRequestError } from "../../errors/BadRequest.js";

export const getLessons = async (req: Request, res: Response) => {
    try {
        const {id} = req.query
        if(!id || typeof(id) !== "string") throw BadRequestError("Subject id missing")
        const lessons: Lesson[] = await getLessonsService(id)
        res.status(200).send(lessons)
    } catch(e) {
        res.status(500).send({message: e.message})
    }
}