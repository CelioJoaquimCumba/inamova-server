import { Request, Response } from "express-serve-static-core";
import { createLessonService } from "../../services/lesson/post-lesson.js"; // Make sure to import the correct service function
import { BadRequestError } from "../../errors/BadRequest.js";

export const createLesson = async (req: Request, res: Response) => {
    try {
        const lessonData = req.body;

        // Check if request body contains lesson data
        if (!lessonData || typeof lessonData !== 'object') {
            throw BadRequestError('Lesson data is required and must be an object');
        }

        // Call the createLessonService function to create the lesson
        const createdLesson = await createLessonService(lessonData);

        // Send the created lesson as a response
        res.status(201).send(createdLesson);
    } catch (e) {
        // Handle errors and send an appropriate response
        res.status(e.statusCode || 500).send({ message: e.message });
    }
};
