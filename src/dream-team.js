const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = []
    let st = ""
    for (let k of members) {
      if (typeof k === 'string')
      {arr.push(k.trim())}
      
    }
    for (let i of arr) {
      
      {st = st + i.slice(0, 1)}
      
    }
    
    return st.split("").sort().join("").toUpperCase().split("").sort().join("").toUpperCase()
  } else {return false}
}

module.exports = {
  createDreamTeam
};
