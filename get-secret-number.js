const { performance } = require('perf_hooks');
const correctLeadingZero = require('./correct-leading-zero');
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
const getRandomNum = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getSecretNumber = () => {
    // Uncomment to see function performance
    // Start tracking performance
    // const t0 = performance.now();

    const digitsCount = 4;
    const digits = [];

    while (digits.length < digitsCount) {
        const number = getRandomNum(0, 9);

        if (!digits.includes(number)) {
            digits.push(number);
        }
    }

    // Uncomment to see function performance
    // End tracking performance (even though we are missing on calculating the leading zero correction)
    // const t1 = performance.now();
    // Log performance to the console
    // console.log(`Call to getSecretNumber took ${(t1 - t0) / 1000} milliseconds.`);

    return correctLeadingZero(digits).join('');
};

module.exports = getSecretNumber;