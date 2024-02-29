/*
Leetcode-7. Reverse Integer
ReverseInteger(123);//321
ReverseInteger(891);//198
ReverseInteger(-891);//-198
*/
const ReverseInteger = (n) => {
    
    //32 bit range
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;

    let reverse = 0;
    let isNegNum = false;

    if(n < 0)
    {
        isNegNum = true;   
        n = Math.abs(n);//Math.abs - to remove negative sign
    }

    while(n > 0)
    {
        let lastDigit = n%10;//last digit

        /*
        0*10+3 = 3,
        3*10+2 = 32,
        32*10+1 = 321
        */
        reverse = reverse*10 + lastDigit;

        n = Math.floor(n/10);//12, 1, 0
    }

    if(reverse < INT_MIN || reverse > INT_MAX)
    {
        return 0
    }
    
    return (isNegNum ?  "-"+reverse : reverse);
}

console.log(ReverseInteger(123));//321
console.log(ReverseInteger(891));//198
console.log(ReverseInteger(-891));//198