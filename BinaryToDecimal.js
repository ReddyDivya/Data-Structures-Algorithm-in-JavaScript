/*
Convert Binary to Decimal
BinaryToDecimal(1010);//10
BinaryToDecimal(0o010);//2
BinaryToDecimal(1100);//12
*/

const BinaryToDecimal = (binary) => {
    let decimal = parseInt(binary, 2);
    return decimal;
}

console.log(BinaryToDecimal(1010));//10
console.log(BinaryToDecimal(10));//2
console.log(BinaryToDecimal(1100));//12