const getFormattedErrorsMessage = require('./get-formatted-errors-message');

const errors = {
    required: 'Please enter a guess.',
    size: 'Must have 4 digits.',
    number: 'Please enter a valid number.',
    unique: 'All digits must be unique.',
};

it('displays required error', () => {
    const errorsList = getFormattedErrorsMessage(['required']);

    expect(errorsList).toContain(errors.required);
});

it('displays size error', () => {
    const errorsList = getFormattedErrorsMessage(['size']);

    expect(errorsList).toContain(errors.size);
});

it('displays number error', () => {
    const errorsList = getFormattedErrorsMessage(['number']);

    expect(errorsList).toContain(errors.number);
});

it('displays unique error', () => {
    const errorsList = getFormattedErrorsMessage(['unique']);

    expect(errorsList).toContain(errors.unique);
});