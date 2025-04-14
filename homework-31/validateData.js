function validateRequiredFields(data) {
    if (!data.title || !data.userId || !data.body) {
        console.error("Помилка в існуванні полів");
        return false;
    }
    return true;
}

function validateDataTypes(data) {
    if (typeof data.title !== 'string' || typeof data.userId !== 'number'
        || typeof data.body !== 'string' || data.userId === 0 || data.userId === null) {
        console.error("Помилка в форматі полів");
        return false;
    }
    return true;
}
function validatePatchData(data) {
    if (data.title && typeof data.title !== 'string') {
        console.error("Помилка: поле 'title' повинно бути строкою");
        return false;
    }
    if (data.body && typeof data.body !== 'string') {
        console.error("Помилка: поле 'body' повинно бути строкою");
        return false;
    }
    if (data.userId && typeof data.userId !== 'number') {
        console.error("Помилка: поле 'userId' повинно бути числом");
        return false;
    }
    return true;
}

export {validateRequiredFields, validateDataTypes, validatePatchData}