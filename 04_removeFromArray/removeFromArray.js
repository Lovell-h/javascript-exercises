const removeFromArray = function(arr, ...rules) {
       return arr.filter(val => !rules.includes(val))
     }

// Do not edit below this line
module.exports = removeFromArray;
