/*
Convert Negative Decimal to Binary
1. 2's complement of Decimal number
2. If, MSB is 1 then it's a negative number
3. Binary Addition
*/
const NegativeDecimalToBinary = (n) => {
    let complement = '', carry = 0, result = '';

    //1. Convert to Binary
    let binary = n.toString(2);

    //2. 1's complement
    for(let i=0; i<binary.length; i++)
    {
        complement += binary[i] === '1' ? '0' : '1';
    }

    return complement;
}

console.log(NegativeDecimalToBinary(-6));//1001(MSB is 1 means negative number)