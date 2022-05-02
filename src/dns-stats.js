const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //Создаем объект куда будем складывать результат
  const objResult = {}
  //Обходим входящий массив
  domains.forEach((domain) => {
    // каждый ключ(строку) разбиваем на массив
    const arr = domain.split('.').reverse();
    // Переменная, куда записываем новый ключ.
    let key = '';
    // Цикл для обхода кажлго ключа входящщего массива(но каждый ключ это уже тоже массив+перевернут)
    for (let i = 0; i < arr.length;) {
      //Ключ равен например сразу music
      key = key + `.${arr[i]}`;
      // проверяем есть ли ключ в объекте, если есть то делаем +1, если нет то создаем его со значением 1
      objResult[key] ? ++objResult[key] : objResult[key] = 1;
      i++;
    }
  })
  return objResult
}

module.exports = {
  getDNSStats
};
