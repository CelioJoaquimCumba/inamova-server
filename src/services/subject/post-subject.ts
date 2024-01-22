import { PrismaClient } from "@prisma/client";
import { Subject } from "../../models/subject.model.js";
import { BadRequestError } from "../../errors/BadRequest.js";

const prisma = new PrismaClient();

export const createSubjectService = async (subjectData: Subject): Promise<Subject> => {
    try {
        await prisma.$connect();

        // Use the Prisma create method to add a new subject to the database
        const createdSubject = await prisma.subject.create({
            data: subjectData,
        });

        return createdSubject;
    } catch (e) {
        throw BadRequestError('Error creating subject: ' + e.message);
    } finally {
        await prisma.$disconnect();
    }
};
