const getFormattedErrorsMessage = (errors = []) => {
    const errorMessages = {
        required: 'Please enter a guess.',
        size: 'Must have 4 digits.',
        number: 'Please enter a valid number.',
        unique: 'All digits must be unique.',
    };
    const message = [];

    if (errors.includes('required')) {
        message.push(errorMessages['required']);
    }

    if (errors.includes('number')) {
        message.push(errorMessages['number']);
    }

    if (errors.includes('size')) {
        message.push(errorMessages['size']);
    }

    if (errors.includes('unique')) {
        message.push(errorMessages['unique']);
    }

    return message.join(' ');
}

module.exports = getFormattedErrorsMessage;