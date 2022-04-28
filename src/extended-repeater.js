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
  str = String(str)
  if(options.addition || typeof options.addition === 'boolean' || options.addition === null) options.addition = String(options.addition)

  if ("separator" in options === false) {
    options.separator = "+"
  } 
  
  if("additionSeparator" in options === false ) {

    options.additionSeparator = "|"
  }
  else if ("repeatTimes" in options === false || "additionRepeatTimes" in options === false ) {

    let st = str + options.addition
    return st
  }

  if (str === options.addition && str !== "null") {
    let st = ((str + options.addition + options.separator).repeat(options.repeatTimes)).slice(0, -options.separator.length)
    return st
  }
  
  
  let arr = Object.keys(options)
  

  if (arr.length === 5) {
  const L = options.separator.length
  const L1 = options.additionSeparator.length
  let st = (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes).slice(0, -L1) +  options.separator ).repeat(options.repeatTimes).slice(0, -L);
  return st
}
  else if (arr.length === 3) {
    let st = (str + options.separator).repeat(options.repeatTimes).slice(0, -options.separator.length)
    return st
  }

 
  else if ((arr.length) === 4) {
    const L = options.separator.length
    const L1 = options.addition.length
    let st = (str + (options.addition.repeat(options.additionRepeatTimes)) + options.separator).repeat(options.repeatTimes).slice(0, -L)
    return st
  }

  else if ("repeatTimes" in options === false || "additionRepeatTimes" in options === false ) {

    let st = str + options.addition
    return st
  }
}

module.exports = {
  repeater
};
