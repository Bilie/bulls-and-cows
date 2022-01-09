const isSecretNumberValid = (guess) => {
    const errors = [];

    // A guess must be provided
    if (!guess.trim()) {
        errors.push('required');
    }

    // The guess must be a valid number
    if (guess && isNaN(Number(guess))) {
        errors.push('number');
    }

    // The guess must have exactly 4 digits
    if (guess && guess.length !== 4) {
        errors.push('size');
    }

    // The guess must have 4 different digits
    if (guess && guess.length === 4) {
        const uniqueDigits = new Set(guess);

        if (Array.from(uniqueDigits).length !== 4) {
            errors.push('unique');
        }
    }

    return errors;
};

module.exports = isSecretNumberValid;