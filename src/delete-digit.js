const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const sArr = [...n.toString()]

  const res = [];

  for (let i = 0; i < sArr.length; i++) {
    const arr = sArr.slice();
    arr.splice(i, 1);
    res.push(+arr.join(''));
  }

  return Math.max.apply(Math, res);
}

module.exports = {
  deleteDigit
};
