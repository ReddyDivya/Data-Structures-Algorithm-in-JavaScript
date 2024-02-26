/*
Leetcode-1009. Complement of Base 10 Integer

*/
const BitwiseComplement = (n) => {
    let complement = '';

    //1. convert to binary
    let binary = n.toString(2);

    //2. 1's complement
    for(let i=0; i<binary.length; i++)
    {
        complement += binary[i] === '0' ? '1' : '0';
    }

    //3. convert back to decimal
    let decimal = parseInt(complement, 2);
    return decimal;
}

console.log(BitwiseComplement(5));//2
console.log(BitwiseComplement(7));//0
console.log(BitwiseComplement(10));//5
