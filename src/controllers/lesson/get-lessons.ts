import { Request, Response } from "express";
import { Lesson } from "../../models/lesson.model.js";
import { getLessonsService } from "../../services/lesson/get-lessons.js";

export const getLessons = async (req: Request, res: Response) => {
    try {
        const lessons: Lesson[] = await getLessonsService()
        res.status(200).send(lessons)
    } catch(e) {
        res.status(500).send(e)
    }
}