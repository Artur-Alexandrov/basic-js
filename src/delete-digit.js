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
  let st = n.toString();
    let arr = st.split("")
    let arr1 = []

    arr.forEach((element, index) => {
        arr.splice(index,1);
        arr1.push(Number(arr.join("")));
        arr.splice(index,0, element);
    }
    
    ); 
  return Math.max(...arr1);
=======
function deleteDigit(/* n */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6:src/delete-digit.js
}

module.exports = {
  deleteDigit
};
