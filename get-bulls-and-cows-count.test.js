const {
    getBullsCount,
    getCowsCount
} = require('./get-bulls-and-cows-count')

it('returns correct number of bulls', () => {
    expect(getBullsCount('1234', '1298')).toBe(2);
});

it('returns 0 when no bulls', () => {
    expect(getBullsCount('1234', '9876')).toBe(0);
});

it('returns correct number of cows', () => {
    expect(getCowsCount('1234', '9812')).toBe(2);
});

it('returns 0 when no cows', () => {
    expect(getCowsCount('1234', '9876')).toBe(0);
});