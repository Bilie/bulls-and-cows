const isSecretNumberValid = require('./is-secret-number-valid');

it('verifies empty strings are invalid', () => {
    expect(isSecretNumberValid('')).toContain('required');
});

it('verifies inputs with same digits are invalid', () => {
    expect(isSecretNumberValid('1111')).toContain('unique');
});

it('verifies too long inputs are invalid', () => {
    expect(isSecretNumberValid('14374673434')).toContain('size');
});

it('verifies too short inputs are invalid', () => {
    expect(isSecretNumberValid('1')).toContain('size');
});

it('verifies inputs with characters are invalid', () => {
    expect(isSecretNumberValid('abcd')).toContain('number');
});

it('verifies inputs with characters are invalid', () => {
    expect(isSecretNumberValid('01bc')).toContain('number');
});

it('verifies numbers with same numbers are invalid', () => {
    expect(isSecretNumberValid('1234').length).toEqual(0);
});