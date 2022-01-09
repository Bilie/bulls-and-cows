const promptLib = require('prompt-sync');

const getPrompt = () => {
    return promptLib({ sigint: true });
};

module.exports = getPrompt;