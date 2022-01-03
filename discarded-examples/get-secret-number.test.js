const getSecretNumber = require('./get-secret-number');

it('generates a 4 digit number', () => {
    const num = getSecretNumber();

    // expect(num.length).toBe(4);
    expect(num).toBeLessThan(9999);
    expect(num).toBeGreaterThan(1000);
});

it('contains only numbers', () => {
    const num = getSecretNumber();

    // expect(num).toMatch(/[0-9]/);
    expect(Number.isNaN(num)).toBe(false);
});

it('generates a number where all 4 digits are unique', () => {
    const num = getSecretNumber().toString().split('');
    const uniqueValuesSet = new Set(num);

    expect(Array.from(uniqueValuesSet).length).toBe(4)
})