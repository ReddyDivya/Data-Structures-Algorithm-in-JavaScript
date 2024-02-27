/*
Convert Decimal to Binary
To get Binary >>
1. Divide n/2
2. n&1
3. ans = ans + bit * Math.pow(10, i);
4. n>>1 (right shift)
*/
const DecimalToBinary = (n) => {
    let i=0, ans=0;
    while(n > 0)
    {
        //1. finding bits of the given decimal
        let bit = n&1;

        //this is the formula
        ans += bit * Math.pow(10, i);
        n = n >> 1;//right shift
        i++;
    }

    return ans;
}  

//Method 2
/*
const DecimalToBinary = (decimal) => {
    return binary = decimal.toString(2);
}
*/

console.log(DecimalToBinary(10));//1010
console.log(DecimalToBinary(9));//1001
console.log(DecimalToBinary(5));//101
console.log(DecimalToBinary(15));//1111