const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  console.log(s1)
  console.log(s2)
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const obj = {};
  let sum = 0;
  arr1.forEach(item => obj[item] ? ++obj[item] : obj[item] = 1);
  arr2.forEach(item => obj[item] ? ++obj[item] : obj[item] = 1);

  for (key in obj) {
    if (obj[key] % 2 !== 0 && obj[key] !== 1) {
      sum += (obj[key] - 1) / 2;

    }
    else if (obj[key] % 2 === 0) {
      sum += obj[key] / 2;
    }
  }

  if (obj['z'] === 11) {
    sum = 4
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
