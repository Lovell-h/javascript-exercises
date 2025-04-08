const palindromes = function (inString) {
const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
const newString = inString
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');
const reverseString = newString.split('').reverse().join('');
return newString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
