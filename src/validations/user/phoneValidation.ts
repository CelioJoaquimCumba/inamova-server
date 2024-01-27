export const PhoneValidation = (phone: string): boolean => {
    // Valid formats:
    // +258 84 123 4567
    // +258841234567
    // 258 84 123 4567
    // 258841234567
    // 841234567
    const re = /^(\+258\s?|258\s?)?((8[234567])?\d{7})$/;

    return re.test(phone);
};