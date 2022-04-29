const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  const res = arr.slice()
  res.forEach((item, i) => {
    if (res[i] === '--double-next') {
      typeof res[i + 1] === 'number' && res[i + 1]
        ? res.splice(i, 1, res[i + 1])
        : res.splice(i, 1)
    }
    else if (res[i] === '--double-prev') {
      typeof res[i - 1] === 'number' && res[i - 1]
        ? res.splice(i, 1, res[i - 1])
        : res.splice(i, 1)
    }
    else if (res[i] === '--discard-next') {
      typeof res[i + 1] === 'number' && res[i + 1]
        ? res.splice(i, 2, null)
        : res.splice(i, 1)
    }
    else if (res[i] === '--discard-prev') {
      typeof res[i - 1] === 'number' && res[i - 1]
        ? res.splice(i - 1, 2, null)
        : res.splice(i, 1)
    }
  })

  return res.filter(item => item);
}

module.exports = {
  transform
};
