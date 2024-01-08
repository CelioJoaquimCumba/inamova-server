export const generateResetToken = (): string => {
  return crypto.randomUUID()
};