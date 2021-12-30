const getSecretNumber = require('./get-secret-number');

it('generates a 4 digit number', () => {
    const num = getSecretNumber();

    expect(num.length).toBe(4);
});

it('contains only numbers', () => {
    const num = getSecretNumber();

    expect(num).toMatch(/[0-9]/);
});

it('generates a number where all 4 digits are unique', () => {
    const num = getSecretNumber();
    const uniqueValuesSet = new Set(num);

    expect(Array.from(uniqueValuesSet).length).toBe(4)
})