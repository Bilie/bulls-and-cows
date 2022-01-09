const play = require('./game-func');

// Mock dependecies
jest.mock('prompt-sync');
jest.mock('./get-secret-number');
jest.mock('./get-prompt');

const prompt = require('prompt-sync')
const getSecretNumber = require('../get-secret-number');
const getPrompt = require('./get-prompt');

describe('game play', () => {
    beforeEach(() => {
        getSecretNumber.mockImplementation(() => '1234');

    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('asks user for name and guess', () => {
        getPrompt.mockImplementation(() => {
            return jest.fn((ask) => {
                console.log('caling mock prompt', ask);

                if (ask === 'Name? ') {
                    return '';
                }

                if (ask === 'Take a guess ') {
                    return '1234';
                }

                return null;
            })
        });

        const prompt = getPrompt();
        play(prompt);

        console.log(prompt)
        //expect(prompt).toHaveBeenCalledTimes(2);
        expect(prompt).toHaveBeenCalledWith(`Take a guess `);
        expect(prompt).toHaveBeenCalledWith(`Name? `);
    });

    it('sets name to Stranger when there is no input', () => {
        getPrompt.mockImplementation(() => {
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

        const consoleSpy = jest.spyOn(console, 'log');
        const prompt = getPrompt();
        play(prompt);

        expect(consoleSpy).toHaveBeenCalledWith(`Congratulations Stranger!`);
    })

    it('congratulates user with correct name when guess is correct', () => {
        getPrompt.mockImplementation(() => {
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
        const prompt = getPrompt();
        play(prompt);

        expect(consoleSpy).toHaveBeenCalledWith(`Congratulations Jane!`);
    });
});