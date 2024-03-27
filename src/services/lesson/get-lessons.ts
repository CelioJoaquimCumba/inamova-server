import { PrismaClient } from "@prisma/client";
import { Lesson } from "../../models/lesson.model.js";
import { BadRequestError } from "../../errors/BadRequest.js";

const prisma = new PrismaClient()
export const getLessonsService = async (id:string): Promise<Array<Lesson>> => {
    try {
        await prisma.$connect()
        const lessons = await prisma.lesson.findMany({
            where: {
                subjectId: id
            }
        })
        if(!lessons) throw BadRequestError("Lição não encontrada")
        return lessons
    } catch(e) {
        throw e
    }finally {
        await prisma.$disconnect()
    }
}