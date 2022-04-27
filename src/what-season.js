import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
}

else if (Object.entries(date.length > 0)) {throw new Error ('Invalid date!')}

else if (!(date instanceof Date && !isNaN(date))) {throw new Error ('Invalid date!')}

let d = date.toDateString()
let arr = d.split(" ")
let wint = ["Jan", "Feb", "Dec"]
let spring = ["Mar", "Apr", "May"]
let summer = ["Jun", "Jul", "Aug"]
let fall = ["Sep", "Oct", "Nov"]

if (wint.includes(arr[1])) {return "winter"}
else if (spring.includes(arr[1])) {return "spring"}
else if (summer.includes(arr[1])) {return "summer"}
else if (fall.includes(arr[1])) {return "fall"}
}
