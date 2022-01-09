const { performance } = require('perf_hooks');
const areDigitsUnique = require('./are-digits-unique');
const getRandomNum = (min, max) => Math.random() * (max - min) + min;

const getSecretNumber = () => {
    // Start tracking performance
    const t0 = performance.now();

    const min = 1000;
    const max = 9999;
    let num = getRandomNum(min, max);

    while (!areDigitsUnique(num)) {
        num = getRandomNum(min, max);
    }

    // End tracking performance
    const t1 = performance.now();
    // Log performance to the console
    console.log(`Call to getSecretNumber took ${(t1 - t0) / 1000} milliseconds.`);

    return num;
};

module.exports = getSecretNumber;