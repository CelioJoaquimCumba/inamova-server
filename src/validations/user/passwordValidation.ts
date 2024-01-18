export const PasswordValidation = (password) => {
    // Regular expression pattern for password validation
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.]).{8,}$/;

    // Test if the provided password matches the pattern
    return re.test(password);
};