import { PrismaClient } from "@prisma/client"
import { Question } from "../../models/question.model.js"
import { BadRequestError } from "../../errors/BadRequest.js"
import { shuffleArray } from "../../utils/shuffle-array.js"

const prisma = new PrismaClient()
export const getQuizService = async (id: string): Promise<Array<Question>> => {
    try {
        const productsCount = await prisma.quizQuestion.count();
        const skip = Math.floor(Math.random() * productsCount);
        await prisma.$connect()
        const questionsWithOptions = await prisma.quizQuestion.findMany({
            where: { quizId: id },
            take: 25,
            include: {
                question: {
                include: {
                    options: true
                }
                }
            },
            skip: skip
        });
        if (!questionsWithOptions) {
            throw BadRequestError('Quiz not found')
        }

        // Extract only the 'question' property from each result
        const questions: Question[] = questionsWithOptions.map(quizQuestion => {
        const question = quizQuestion.question;
        
        // Randomize the order of options using Fisher-Yates shuffle algorithm
        question.options = shuffleArray(question.options);

        return question;
        });

        return questions
    } catch(e) {
        throw e
    }finally {
        await prisma.$disconnect()
    }
}