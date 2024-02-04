/*
Fibonacci series => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,....
F(0) = 0, F(1) = 1
F(n) = (n - 1) + (n - 2), for n > 1

Fibonacci(3) => 0+1+1 = 2
Fibonacci(5) => 0+1+1+2+3 = 5
*/
//Using 'for' loop
const FibonacciSeries = (num) => {
    if(num <= 1) return num;//F(0) = 0, F(1) = 1

    let arr = [0, 1];//F(0) = 0, F(1) = 1
    
    for(let i=2; i<=num; i++)
    {
        arr.push(arr[i-2] + arr[i-1]);//F(n) = (n - 1) + (n - 2), for n > 1
    }

    return arr[num];
}

console.log('Using for loop => ');
console.log(FibonacciSeries(3));//2
console.log(FibonacciSeries(5));//5
console.log(FibonacciSeries(8));//21

console.log('---------');

//Using Recursion
const Fibonacci = (num) => {
    if(num <= 1) return num;//F(0) = 0, F(1) = 1

    return Fibonacci(num - 1) + Fibonacci(num - 2);//F(n) = (n - 1) + (n - 2), for n > 1
}

console.log('Using recursion => ');
console.log(Fibonacci(3));//2
console.log(Fibonacci(5));//5
console.log(Fibonacci(8));//21