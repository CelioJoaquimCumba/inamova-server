export const NameValidation = (name: string): boolean => {
    const re =/^[a-zA-Z\s]{2,}$/
    return re.test(name);
};