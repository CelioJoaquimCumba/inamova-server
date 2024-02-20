import crypto from "crypto";
export const generateResetToken = (): string => {
  return crypto.randomUUID()
};