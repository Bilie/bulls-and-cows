const getSecretNumber = require('../get-secret-number');
const isSecretNumberValid = require('../is-secret-number-valid');
const getFormattedErrorsMessage = require('../get-formatted-errors-message');
const formatBullsAndCowsResponse = require('../get-formatted-bulls-and-cows-reponse');
const {
    getBullsCount,
    getCowsCount
} = require('../get-bulls-and-cows-count')

const play = (prompt) => {
    const name = prompt('Name? ') || 'Stranger';
    const secretNumber = getSecretNumber();

    let isGameOn = true;
    // TODO: Only for debugging, don't forget to delete
    console.log(`The secret number is ${secretNumber}`);

    while (isGameOn) {
        const guess = prompt("Take a guess ");

        // Validation
        const errors = isSecretNumberValid(guess);

        if (errors.length) {
            const errorMessage = getFormattedErrorsMessage(errors);

            console.log(errorMessage)

            continue;
        }

        if (secretNumber === guess) {
            console.log(`Congratulations ${name}!`);
            isGameOn = false;
        } else {
            const bullsCount = getBullsCount(secretNumber, guess);
            const cowsCount = getCowsCount(secretNumber, guess);
            const message = formatBullsAndCowsResponse(bullsCount, cowsCount);

            console.log(message);
        }
    }
};

module.exports = play;
