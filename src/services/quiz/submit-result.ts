import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const submitResultService = async ( quizId: string, score: number, total: number, userId: string ) => {
    try {
        await prisma.$connect()

        const quiz = await prisma.quiz.findUnique({
            where: {
                id: quizId
            }
        })

        const passingPercentage = Number(quiz.passingPercentage)
        const userPercentage = (score*100)/total

        await prisma.user.update({
            where: {
                id: userId
            } ,
            data: {
                madeQuizzes: {
                    increment: 1
                },
                passedQuizzes: {
                    increment: userPercentage >= passingPercentage ? 1 : 0
                }
            }
        })

        await prisma.result.create({
            data: {
                score,
                total,
                userId,
                quizId,
                passed: userPercentage >= passingPercentage
            }
        })

    } catch(error) {
        throw error
    } finally {
        await prisma.$disconnect()
    }

}