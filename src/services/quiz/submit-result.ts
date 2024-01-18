import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const submitResultService = async ( quizId: string, score: number, total: number, userId: string ) => {
    try {
        await prisma.$connect()

        await prisma.result.create({
            data: {
                score,
                total,
                userId,
                quizId
            }
        })

    } catch(error) {
        throw error
    } finally {
        await prisma.$disconnect()
    }

}