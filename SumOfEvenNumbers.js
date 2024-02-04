/*
sum of the first n even numbers => sum = n(n+1)

SumOfEvenNumbers(5) => 6
SumOfEvenNumbers(10) => 30
*/

const SumOfEvenNumbers = (n) => {
    if(n <= 0 ) return false;

    return n * (n+1);//formula for sum of 'n' even numbers
}

console.log(SumOfEvenNumbers(5));//2+4+6+8+10 = 30  
console.log(SumOfEvenNumbers(10));//2+4+6+8+10+12+14+16+18+20=110
console.log(SumOfEvenNumbers(15));//2+4+6+8+10+12+14+16+18+20+22+24+26+28+30=240