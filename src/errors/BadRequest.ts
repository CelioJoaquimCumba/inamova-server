export const badRequestError = (message: string): Error => {
  const error = new Error(message);
  (error as any).statusCode = 400; // Add a custom property for the status code
  return error;
};
