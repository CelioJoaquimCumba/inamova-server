import { Request, Response } from "express-serve-static-core";
import { getLessonService } from "../../services/lesson/get-lesson.js";
import { BadRequestError } from "../../errors/BadRequest.js";

export const getLesson = async (req: Request, res: Response) => {
    try {
        const { id } = req.query;

        // Check if 'id' parameter is missing or not a string
        if (!id || typeof id !== 'string') {
            throw BadRequestError('Lesson id is required and must be a string');
        }

        // Call the getLessonService function to retrieve the lesson
        const lesson = await getLessonService(id);

        // Check if the lesson is not found
        if (!lesson) {
            throw BadRequestError('Lesson not found');
        }

        // Send the lesson as a response
        res.status(200).send(lesson);
    } catch (e) {
        // Handle errors and send an appropriate response
        res.status(e.statusCode || 500).send({ message: e.message });
    }
};
