import { PrismaClient } from "@prisma/client";
import { Lesson } from "../../models/lesson.model.js";
import { BadRequestError } from "../../errors/BadRequest.js";

const prisma = new PrismaClient();

export const createLessonService = async (lessonData: Lesson): Promise<Lesson> => {
    try {
        await prisma.$connect();

        // Use the Prisma create method to add a new lesson to the database
        const createdLesson = await prisma.lesson.create({
            data: lessonData,
        });

        return createdLesson;
    } catch (e) {
        throw BadRequestError('Erro ao criar aula: ' + e.message);
    } finally {
        await prisma.$disconnect();
    }
};
