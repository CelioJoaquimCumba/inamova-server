export const NameValidation = (name: string): boolean => {
    const re = /^[a-zA-Z\u00C0-\u00FF\s]{2,}$/;
    return re.test(name);
};
