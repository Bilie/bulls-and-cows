const Game = require('./game');

// Mock dependecies
jest.mock('prompt-sync');
jest.mock('./get-secret-number');

const prompt = require('prompt-sync')
const getSecretNumber = require('./get-secret-number');

describe('game works as expeceted', () => {
    beforeEach(() => {
        // getSecretNumber.mockImplementation(() => '1234');
        getSecretNumber.mockReturnValue('1234');
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('set name correctly when user provides name', () => {
        prompt.mockImplementation(() => {
            return jest.fn((ask) => {
                if (ask === 'Name? ') {
                    return 'Jane';
                }

                if (ask === 'Take a guess ') {
                    return '1234';
                }

                return null;
            });
        });

        const game = new Game();

        expect(game.prompt).toHaveBeenCalledTimes(1);
        expect(game.prompt).toHaveBeenCalledWith(`Name? `);
        expect(game.name).toBe(`Jane`);
    });

    it('sets name to Stranger when there is no input', () => {
        prompt.mockImplementation(() => {
            return jest.fn((ask) => {
                if (ask === 'Name? ') {
                    return '';
                }

                if (ask === 'Take a guess ') {
                    return '1234';
                }

                return null;
            });
        });

        const game = new Game();

        expect(game.prompt).toHaveBeenCalledTimes(1);
        expect(game.prompt).toHaveBeenCalledWith(`Name? `);
        expect(game.name).toBe('Stranger')
    });

    it('keeps asking user for guess until secret number is guessed', () => {
        prompt.mockImplementation(() => {
            let count = 1;

            return jest.fn((ask) => {
                if (ask === 'Name? ') {
                    return 'Jane';
                }

                if (ask === 'Take a guess ' && count === 1) {
                    count++
                    return '9876';
                }

                if (ask === 'Take a guess ' && count === 2) {
                    count++
                    return '8765';
                }

                if (ask === 'Take a guess ' && count === 3) {

                    return '1234';
                }

                return null;
            });
        });

        const game = new Game();
        game.play();

        expect(game.prompt).toHaveBeenCalledWith(`Name? `);
        expect(game.prompt).toHaveBeenCalledWith(`Take a guess `);
        expect(game.prompt).toHaveBeenCalledTimes(4); // 3 for guess, and 1 for name
    })

    it('congratulates user with correct name when guess is correct', () => {
        prompt.mockImplementation(() => {
            return jest.fn((ask) => {
                if (ask === 'Name? ') {
                    return 'Jane';
                }

                if (ask === 'Take a guess ') {
                    return '1234';
                }

                return null;
            });
        });

        const consoleSpy = jest.spyOn(console, 'log');
        const game = new Game();
        game.play();

        // expect(game.prompt).toHaveBeenCalledWith(`Take a guess `);
        expect(consoleSpy).toHaveBeenCalledWith(`Congratulations Jane!`);
    });

    it('displays errors with wrong user input', () => {
        prompt.mockImplementation(() => {
            // Use count value to simulate different user inputs
            let count = 1;
            return jest.fn((ask) => {

                if (ask === 'Name? ') {
                    return 'Jane';
                }

                if (ask === 'Take a guess ' && count === 1) {
                    count++;
                    return '';
                }

                if (ask === 'Take a guess ' && count !== 1) {
                    return '1234';
                }

                return null;
            });
        });

        const consoleSpy = jest.spyOn(console, 'log');
        const game = new Game();
        game.play();

        expect(consoleSpy).toHaveBeenCalledWith(`Please enter a guess.`);
    });

    it('displays bulls and cows count', () => {
        prompt.mockImplementation(() => {
            // Use count value to simulate different user inputs
            let count = 1;
            return jest.fn((ask) => {
                if (ask === 'Name? ') {
                    return 'Jane';
                }

                if (ask === 'Take a guess ' && count === 1) {
                    count++;
                    return '1324';
                }

                if (ask === 'Take a guess ' && count > 1) {
                    return '1234';
                }

                return null;
            });
        });

        const consoleSpy = jest.spyOn(console, 'log');
        const game = new Game();
        game.play();

        expect(consoleSpy).toHaveBeenCalledWith(`Looking good! You have found 2 bulls and 2 cows.`);
    });
});