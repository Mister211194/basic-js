const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this._type = type;
    this._code = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }

  _keyLength(string, key) {
    while (string.length > key.length) {
      key += key;
    }
    if (key.length > string.length) {
      key = key.slice(0, (string.length - key.length))
    }
    return key.toUpperCase();
  }

  _summIndex(mess, key, idx) {
    if (!mess[idx].match(/[a-zA-Z]/g)) {
      return mess[idx];
    } else {
      const summ = this._code.indexOf(mess[idx]) + this._code.indexOf(key[idx])
      return summ >= 26 ? summ - 26 : summ
    }
  }

  _summIndexDecode(mess, key, idx) {
    if (!mess[idx].match(/[a-zA-Z]/g)) {
      return mess[idx];
    } else {
      const summ = this._code.indexOf(mess[idx]) - this._code.indexOf(key[idx]);
      return summ < 0 ? summ + 26 : summ
    }
  }

  encrypt(mess, key) {
    if (!mess || !key) throw new Error('Incorrect arguments!');

    key = this._keyLength(mess, key);
    mess = mess.toUpperCase()
    let res = [];
    for (let i = 0; i < mess.length; i++) {
      if (!mess[i].match(/[a-zA-Z]/g)) key = key.slice(0, i) + ' ' + key.slice(i);
      res.push(this._summIndex(mess, key, i))
    }

    res = res.map(item => typeof item === 'number'
      ? this._code[item]
      : item).join('');

    return this._type ? res : res.split('').reverse().join("");
  }

  decrypt(mess, key) {
    if (!mess || !key) throw new Error('Incorrect arguments!');
    key = this._keyLength(mess, key);
    mess = mess.toUpperCase()
    let res = [];
    for (let i = 0; i < mess.length; i++) {
      if (!mess[i].match(/[a-zA-Z]/g)) key = key.slice(0, i) + ' ' + key.slice(i);
      res.push(this._summIndexDecode(mess, key, i))
    }

    res = res.map(item => typeof item === 'number'
      ? this._code[item]
      : item).join('');

    return this._type ? res : res.split('').reverse().join("");
  }
}


module.exports = {
  VigenereCipheringMachine
};
