export const PasswordValidation = (password) => {
    // Regular expression pattern for password validation
    const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]/;

    // Test if the provided password matches the pattern
    return re.test(password);
};