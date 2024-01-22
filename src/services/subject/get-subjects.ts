import { PrismaClient } from "@prisma/client";
import { Subject } from "../../models/subject.model.js";

const prisma = new PrismaClient()
export const getSubjectsService = async (): Promise<Array<Subject>> => {
    try {
        await prisma.$connect()
        const subjects = await prisma.subject.findMany()
        return subjects
    } catch(e) {
        throw e
    }finally {
        await prisma.$disconnect()
    }
}