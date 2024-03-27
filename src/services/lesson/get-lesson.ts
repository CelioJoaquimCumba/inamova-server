import { PrismaClient } from "@prisma/client"
import { Lesson } from "../../models/lesson.model.js"
import { BadRequestError } from "../../errors/BadRequest.js"
import { shuffleArray } from "../../utils/shuffle-array.js"

const prisma = new PrismaClient()

export const getLessonService = async (id: string): Promise<Lesson | null> => {
    try {
        await prisma.$connect()
        
        // Use findUnique to retrieve a single lesson based on its ID
        const lesson = await prisma.lesson.findUnique({
            where: { id }
        });

        if (!lesson) {
            throw BadRequestError('Lição não encontrada');
        }

        // Return the specific lesson
        return lesson;
    } catch (e) {
        throw e;
    } finally {
        await prisma.$disconnect();
    }
}
