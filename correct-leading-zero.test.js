const correctLeadingZero = require('./correct-leading-zero');

it('moves leading zero to the end', () => {
    const correctedValue = correctLeadingZero([0, 1, 2, 3]).join('');
    const expectedValue = [1, 2, 3, 0].join('');

    expect(correctedValue).toBe(expectedValue);
})

it('returns the original array if there is nothing to correct', () => {
    const correctedValue = correctLeadingZero([1, 2, 3, 4]).join('');
    const expectedValue = [1, 2, 3, 4].join('');

    expect(correctedValue).toBe(expectedValue);
})