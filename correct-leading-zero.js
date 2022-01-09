const correctLeadingZero = (arr) => {
    const isFirstDigitZero = arr[0] === 0;

    if (isFirstDigitZero) {
        arr.push(arr.shift());
    }

    return arr;
}

module.exports = correctLeadingZero;