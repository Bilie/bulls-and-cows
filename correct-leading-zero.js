const correctLeadingZero = (arr) => {
    const isFirstDigitZero = arr[0] === 0;

    if (isFirstDigitZero) {
        return arr.reverse();
    }

    return arr;
}

module.exports = correctLeadingZero;