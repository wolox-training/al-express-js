exports.timestamp = () => Date.now() / 1000;

// eslint-disable-next-line no-mixed-operators
exports.addHours = hours => Date.now() / 1000 + hours * 60 * 60;
