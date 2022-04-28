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
  let j = []

  for (let i of domains) {
      for (let k = 0; k < i.length; k++) {
          if (i[k] === ".") {j.push(i.slice(k))}
          
      }
      
  }

  let new_arr = domains.concat(j)
  let new_arr1 = []

  for (let q of new_arr) {
      q = q.split(".").reverse().join(".");
      
      if (q.charAt(q.length - 1) === ".") {q = q.slice(0, -1)}
      
      q = "." + q
      new_arr1.push(q)
      
  }
      
  
  const counts = {}
  new_arr1.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  
  return counts
}

module.exports = {
  getDNSStats
};
