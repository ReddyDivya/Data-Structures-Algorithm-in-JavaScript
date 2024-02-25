const ReverseInteger = (n) => {
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

    return (isNegNum ?  "-"+reverse : reverse);
}

console.log(ReverseInteger(123));//321
console.log(ReverseInteger(891));//198
console.log(ReverseInteger(-891));//198