/*
Convert Binary to Decimal
To get Decimal >>
1. modulus of n
2. 2^3 + 2^2 + 2^1 + 2^0
3. n/10
*/
const BinaryToDecimal = (n) => {
    let i=0, ans = 0;

    while(n > 0)
    {
        let digit =  n%10;//modulus to get last digit
        if(digit == 1)
        {
            //Procedure => 2^2 + 2^1 + 2^0
            ans = ans + Math.pow(2, i);
        }

        n = Math.floor(n/10);//division
        i++;
    }

    return ans;
}

//Method 2
/*
const BinaryToDecimal = (binary) => {
    return decimal = parseInt(binary, 2);
}
*/

console.log(BinaryToDecimal(1001));//9
console.log(BinaryToDecimal(1101));//13
console.log(BinaryToDecimal(101));//5
console.log(BinaryToDecimal(1111));//15