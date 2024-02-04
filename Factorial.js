/*
Factorial 
Factorial(5) => 5*4*3*2*1 = 120
*/

const Factorial = (num) => {

    if(num === 0 || num === 1) return 1;

    let result = 1;

    for(let i=num; i > 0; i--)
    {
        result = result * i;
    }

    return result;
}

console.log("1. using for loop ");
console.log(Factorial(0));//1
console.log(Factorial(1));//1
console.log(Factorial(5));//120
console.log(Factorial(7));//5040
console.log("----------");

//2. Using recursion
const Factorial2 = (num) => {
    if(num === 0 || num === 1) return 1;

    let result = 1;
    result = num * Factorial2(num - 1);

    return result;
}

console.log("2. Using Recursion");
console.log(Factorial(0));//1
console.log(Factorial(1));//1
console.log(Factorial2(5));//120
console.log(Factorial2(7));//5040