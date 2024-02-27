/*
    Print Binary number of the given decimal
*/
const PrintBinaryOfGivenDecimal = (n) => {
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

console.log(PrintBinaryOfGivenDecimal(10));//1010
console.log(PrintBinaryOfGivenDecimal(9));//1001
console.log(PrintBinaryOfGivenDecimal(5));//101
console.log(PrintBinaryOfGivenDecimal(15));//1111