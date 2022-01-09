const promptLib = require('prompt-sync');
const getSecretNumber = require('./get-secret-number');
const isSecretNumberValid = require('./is-secret-number-valid');
const getFormattedErrorsMessage = require('./get-formatted-errors-message');
const formatBullsAndCowsResponse = require('./get-formatted-bulls-and-cows-reponse');
const {
    getBullsCount,
    getCowsCount
} = require('./get-bulls-and-cows-count')

class Game {
    constructor() {
        this.prompt = promptLib({ sigint: true });
        this.name = this.prompt('Name? ') || 'Stranger';
        this.secretNumber = getSecretNumber();
        this.isGameOn = true;
        this.errors = [];
    }

    play() {
        while (this.isGameOn) {
            const guess = this.prompt("Take a guess ");

            // Validation
            this.errors = isSecretNumberValid(guess);

            if (this.errors.length) {
                const errorMessage = getFormattedErrorsMessage(this.errors);

                console.log(errorMessage)

                continue;
            }

            if (this.secretNumber === guess) {
                console.log(`Congratulations ${this.name}!`);
                this.isGameOn = false;
            } else {
                const bullsCount = getBullsCount(this.secretNumber, guess);
                const cowsCount = getCowsCount(this.secretNumber, guess);
                const message = formatBullsAndCowsResponse(bullsCount, cowsCount);

                console.log(message);
            }
        }
    }
}

module.exports = Game;