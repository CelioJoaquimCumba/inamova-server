import { PrismaClient } from "@prisma/client"
import { Subject } from "../../models/subject.model.js"
import { BadRequestError } from "../../errors/BadRequest.js"
import { shuffleArray } from "../../utils/shuffle-array.js"

const prisma = new PrismaClient()

export const getSubjectService = async (id: string): Promise<Subject | null> => {
    try {
        await prisma.$connect()
        
        // Use findUnique to retrieve a single subject based on its ID
        const subject = await prisma.subject.findUnique({
            where: { id }
        });

        if (!subject) {
            throw BadRequestError('Assunto não encontrado');
        }

        // Return the specific subject
        return subject;
    } catch (e) {
        throw e;
    } finally {
        await prisma.$disconnect();
    }
}
