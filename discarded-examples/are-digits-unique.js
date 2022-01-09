const areDigitsUnique = (input) => {
    if (!input || typeof input !== 'number') {
        throw new Error('Input must be a number');
    }

    const digits = input.toString().split('');

    return Array.from(new Set(digits)).length === 4;
}

module.exports = areDigitsUnique;