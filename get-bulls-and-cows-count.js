const getBullsCount = (secretNumber, guessNumber) => {
    const secretNumberArray = secretNumber.split('');
    const guessNumberArray = guessNumber.split('');
    let bullsCount = 0;

    secretNumberArray.forEach((_item, index) => {
        if (secretNumberArray[index] === guessNumberArray[index]) {
            bullsCount++;
        }
    });

    return bullsCount;
};

const getCowsCount = (secretNumber, guessNumber) => {
    const secretNumberArray = secretNumber.split('');
    const guessNumberArray = guessNumber.split('');
    let cowsCount = 0;

    secretNumberArray.forEach((item, index) => {
        if (guessNumberArray.includes(item) && guessNumberArray.indexOf(item) !== index) {
            cowsCount++;
        }
    });

    return cowsCount;
};


module.exports = {
    getBullsCount,
    getCowsCount
};