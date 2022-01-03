const correctLeadingZero = require('./correct-leading-zero');

it('moves leading zero to end array', () => {
    const correctedValue = correctLeadingZero([0, 1, 2, 3]).join('');
    const expectedValue = [3, 2, 1, 0].join('');

    expect(correctedValue).toBe(expectedValue);
})

it('returns the original array if there is nothing to correct', () => {
    const correctedValue = correctLeadingZero([1, 2, 3, 4]).join('');
    const expectedValue = [1, 2, 3, 4].join('');

    expect(correctedValue).toBe(expectedValue);
})