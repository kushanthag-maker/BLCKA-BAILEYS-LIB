function isCommand(text, prefix) {
    return text.startsWith(prefix);
}

function getCommand(text, prefix) {
    return text.replace(prefix, "").split(" ")[0];
}

module.exports = { isCommand, getCommand };
