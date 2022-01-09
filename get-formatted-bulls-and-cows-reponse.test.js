const formatBullsAndCowsResponse = require('./get-formatted-bulls-and-cows-reponse.js');

it('prints correct message with 1 bulls', () => {
    expect(formatBullsAndCowsResponse(1, 0)).toBe(
        'Not bad! You got 1 bull.'
    )
});

it('prints correct message with many bulls', () => {
    expect(formatBullsAndCowsResponse(2, 0)).toBe(
        'Not bad! You got 2 bulls.'
    )
});

it('prints correct message with 1 cow', () => {
    expect(formatBullsAndCowsResponse(0, 1)).toBe(
        'Getting there! You got 1 cow.'
    )
});

it('prints correct message with many cows', () => {
    expect(formatBullsAndCowsResponse(0, 3)).toBe(
        'Getting there! You got 3 cows.'
    )
});

it('prints correct message both bulls and cows', () => {
    expect(formatBullsAndCowsResponse(2, 1)).toBe(
        'Looking good! You have found 2 bulls and 1 cow.'
    )
});

it('prints consolation message when no bulls or cows', () => {
    expect(formatBullsAndCowsResponse(0, 0)).toBe(
        `Sorry, this was not a good guess I feel.`
    )
});