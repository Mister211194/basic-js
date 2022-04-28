const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return '';
  const items = [...str];
  let res = '';
  let val = 1;
  items.forEach((item, i) => {
    if (items[i] === items[i + 1]) {
      val += 1;
    } else {
      val === 1
        ? res = res + items[i]
        : res = res + `${val}${items[i]}`;
      val = 1;
    }
  })
  return res;
}

module.exports = {
  encodeLine
};
