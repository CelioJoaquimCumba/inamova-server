import { Request, Response } from "express-serve-static-core";
import { getSubjectService } from "../../services/subject/get-subject.js";
import { BadRequestError } from "../../errors/BadRequest.js";

export const getSubject = async (req: Request, res: Response) => {
    try {
        const { id } = req.query;

        // Check if 'id' parameter is missing or not a string
        if (!id || typeof id !== 'string') {
            throw BadRequestError('Subject id is required and must be a string');
        }

        // Call the getSubjectService function to retrieve the subject
        const subject = await getSubjectService(id);

        // Check if the subject is not found
        if (!subject) {
            throw BadRequestError('Subject not found');
        }

        // Send the subject as a response
        res.status(200).send(subject);
    } catch (e) {
        // Handle errors and send an appropriate response
        res.status(e.statusCode || 500).send({ message: e.message });
    }
};
