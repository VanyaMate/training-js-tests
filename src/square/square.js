const square = function (num) {
    if (num === 1) {
        return 1;
    }

    return Math.pow(num, 2);
}

module.exports = square;