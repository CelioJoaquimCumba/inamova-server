import { PrismaClient } from "@prisma/client";
import { Lesson } from "../../models/lesson.model.js";

const prisma = new PrismaClient()
export const getLessonsService = async (): Promise<Array<Lesson>> => {
    try {
        await prisma.$connect()
        const lessons = await prisma.lesson.findMany()
        return lessons
    } catch(e) {
        throw e
    }finally {
        await prisma.$disconnect()
    }
}