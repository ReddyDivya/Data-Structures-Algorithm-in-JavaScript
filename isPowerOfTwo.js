/*
Power of Two
isPowerOfTwo(4) => true
isPowerOfTwo(5) => false
*/

const isPowerOfTwo = (num) => {
    let ans = 1, INT_MAX = 2147483647;;

    for(let i=0; i<=30; i++)//int range is 2^31(0-30)
    {
        //checking ans is equal to the given num.
        if(num == ans)
            return true;

        /*
        If ans hasn't reached the maximum integer value (INT_MAX), it multiplies ans by 2 in each iteration, effectively checking the next power of two.
        */
        if(ans < INT_MAX)
            ans = ans * 2;//previous ans * 2
    }

    //If no match is found within the loop, the function returns false
    return false;
}

console.log(isPowerOfTwo(1));//true
console.log(isPowerOfTwo(2));//true
console.log(isPowerOfTwo(5));//false
console.log(isPowerOfTwo(8));//true
console.log(isPowerOfTwo(11));//false