const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  if (!repeatTimes) return str + plusAddition(addition, additionRepeatTimes, additionSeparator);
  let res = '';
  for (let i = 1; i <= repeatTimes; i++) {
    if (!separator) {
      separator = '+';
    }
    i < repeatTimes
      ? res = res + str + plusAddition(addition, additionRepeatTimes, additionSeparator) + separator
      : res = res + str + plusAddition(addition, additionRepeatTimes, additionSeparator);
  }
  return res
}
function plusAddition(addition, additionRepeatTimes, additionSeparator) {
  let resAddition = '';
  if (!addition && !additionRepeatTimes && !additionSeparator) return resAddition;
  if (!additionRepeatTimes && typeof additionSeparator !== 'number') return addition;
  for (let i = 1; i <= additionRepeatTimes; i++) {
    if (!additionSeparator) {
      additionSeparator = '|';
    }
    i < additionRepeatTimes
      ? resAddition = resAddition + addition + additionSeparator
      : resAddition = resAddition + addition;
  }
  return resAddition;
}

module.exports = {
  repeater
};
