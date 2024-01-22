import { Request, Response } from "express-serve-static-core";
import { createSubjectService } from "../../services/subject/post-subject.js"; // Make sure to import the correct service function
import { BadRequestError } from "../../errors/BadRequest.js";

export const createSubject = async (req: Request, res: Response) => {
    try {
        const subjectData = req.body;

        // Check if request body contains subject data
        if (!subjectData || typeof subjectData !== 'object') {
            throw BadRequestError('Subject data is required and must be an object');
        }

        // Call the createSubjectService function to create the subject
        const createdSubject = await createSubjectService(subjectData);

        // Send the created subject as a response
        res.status(201).send(createdSubject);
    } catch (e) {
        // Handle errors and send an appropriate response
        res.status(e.statusCode || 500).send({ message: e.message });
    }
};
