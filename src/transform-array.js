import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  
  if(!Array.isArray(arr)){
    throw new Error ('\'arr\' parameter must be an instance of the Array!');
  } 

    let new_arr = [...arr] 
    
    function checker(el, i) {
      if (el === '--double-prev' && i !== 0) {new_arr.splice(i, 1, new_arr[i - 1])}

      else if (el === '--double-next'  && i !== new_arr.length - 1) {new_arr.splice(i, 1, new_arr[i + 1])}

      else if (el === '--discard-next' && i !== new_arr.length - 1) {new_arr.splice(i, 2,)}

      else if (el === '--discard-prev'  && i !== 0) {new_arr.splice(i-1, 2)}

      else if ( el === '--double-prev'  && i === 0) {new_arr.splice(i, 1)}

      else if ( el === '--discard-prev' && i === 0) {new_arr.splice(i, 1)}

      else if (el === '--double-next' && i === new_arr.length - 1) {new_arr.splice(i, 1)}

      else if (el === '--discard-next' && i === new_arr.length - 1) {new_arr.splice(i, 1)}
          
    }

    new_arr.map(checker);
      
    
  return new_arr
}