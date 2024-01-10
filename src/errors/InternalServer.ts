export const InternalServerError = (message: string): Error => {
  const error = new Error(message);
  (error as any).statusCode = 500; // Add a custom property for the status code
  return error;
};
