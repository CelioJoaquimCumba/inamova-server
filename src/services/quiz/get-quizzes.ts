import { PrismaClient } from "@prisma/client";
import { Quiz } from "../../models/quiz.model.js";

const prisma = new PrismaClient()
export const getQuizzesService = async (): Promise<Array<Quiz>> => {
    try {
        await prisma.$connect()
        const quizzes = await prisma.quiz.findMany()
        return quizzes
    } catch(e) {
        throw e
    }finally {
        await prisma.$disconnect()
    }
}