import { PrismaClient } from "@prisma/client"
import { BadRequestError } from "../../errors/BadRequest.js";
import { InternalServerError } from "../../errors/InternalServer.js";

const prisma = new PrismaClient()
export const checkPasswordTokenService = async (token: string, email: string): Promise<void> => {
try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.resetToken !== token || user.resetExpiry < new Date()) {
      throw BadRequestError('Invalid or expired token');
    }

  } catch (error) {
    throw InternalServerError(error.message);
  }
}