export const requaredField = (value) => {
    if (value) {
        return undefined;
    } else {
        return 'Field required'
    }
}
export const maxLenghtCreator = (maxLength) =>
    (value) => {
    if (value && value.length>maxLength) {
        return `Max length is ${maxLength} simbols`;
    } else {
        return undefined;
    }
}