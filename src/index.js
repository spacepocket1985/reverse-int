module.exports = function reverse (n) {
    n = (n > 0) ? (String(n).split('').reverse().join('')) : (String(-n).split('').reverse().join(''));
    return n
}
