import { PrismaClient } from "@prisma/client"
import { BadRequestError } from "../../errors/BadRequest.js";
import { createHash } from "crypto";
import { generateHash } from "../../utils/generateHash.js";
import { InternalServerError } from "../../errors/InternalServer.js";

const prisma = new PrismaClient()
export const changePasswordService = async (token: string, password: string, email: string) => {
try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.resetToken !== token || user.resetExpiry < new Date()) {
      throw BadRequestError('Invalid or expired token');
    }
    const hashedPassword = generateHash(password);

    // Reset password logic
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetExpiry: null,
      },
    });

  } catch (error) {
    throw InternalServerError(error.message);
  }
}