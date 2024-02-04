/*
Power of Two
isPowerOfTwo(4) => true
isPowerOfTwo(5) => false
*/

const isPowerOfTwo = (num) => {
    if(num < 1) return false;

    while(num > 1)
    {
        if(num % 2 !== 0)
            return false

        num = num/2;
    }
    return true;
}

console.log(isPowerOfTwo(1));//true
console.log(isPowerOfTwo(2));//true
console.log(isPowerOfTwo(5));//false
console.log(isPowerOfTwo(8));//true
console.log(isPowerOfTwo(11));//false