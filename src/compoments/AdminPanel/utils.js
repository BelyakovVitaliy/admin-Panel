export const createFilter = (fieldName, value, filterType, contains) => {
    return {
        type: filterType,
        [fieldName]: value,
        contains
    };
};