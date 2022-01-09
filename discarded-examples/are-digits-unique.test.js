const areDigitsUnique = require('./are-digits-unique');

it('returns true when all digits are uniqe', () => {
    expect(areDigitsUnique(1234)).toBe(true);
});

it('returns false when digits repeat', () => {
    expect(areDigitsUnique(1123)).toBe(false);
});

it('throw an error when input is incorrect', () => {
    expect(() => {
        areDigitsUnique([]);
    }).toThrow();

    expect(() => {
        areDigitsUnique('1234');
    }).toThrow();

    expect(() => {
        areDigitsUnique();
    }).toThrow();
});