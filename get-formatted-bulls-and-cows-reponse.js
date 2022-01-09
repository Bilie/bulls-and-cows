const formatBullsAndCowsResponse = function (bullsCount, cowsCount) {
    if (!bullsCount && !cowsCount) {
        return `Sorry, this was not a good guess I feel.`;
    }

    const bulls = `${bullsCount} ${bullsCount === 1 ? 'bull' : 'bulls'}`;
    const cows = `${cowsCount} ${cowsCount === 1 ? 'cow' : 'cows'}`;

    if (bullsCount && cowsCount) {
        return `Looking good! You have found ${bulls} and ${cows}.`;
    } else if (bullsCount) {
        return `Not bad! You got ${bulls}.`;
    } else if (cowsCount) {
        return `Getting there! You got ${cows}.`;
    }
}

module.exports = formatBullsAndCowsResponse;