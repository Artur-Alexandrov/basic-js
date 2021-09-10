import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(s) {
  let x = 1;    
    let res = '';
    for(let i=0; i < s.length; i++){
        if(s[i] === s[i+1]){
            x += 1;
        } else {
            res += x+s[i];
            x = 1;
        }
    }
    return res.replace(/1/g, "");
}
