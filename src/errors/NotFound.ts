export const NotFoundError = (message: string): Error => {
  const error = new Error(message);
  (error as any).statusCode = 404; // Add a custom property for the status code
  return error;
};
