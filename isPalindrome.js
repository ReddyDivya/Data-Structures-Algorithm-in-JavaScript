/*
Is number Palindrome?
121 - 121 - true
10 - 01 - false
*/
const isPalindrome = (num) => {
    //+ converts string into number
    return result = num < 0 ? false : +num.toString().split("").reverse().join("");
}

console.log('Using string built-in functions => ');
console.log(isPalindrome(121));//true
console.log(isPalindrome(10));//false

console.log('---------');