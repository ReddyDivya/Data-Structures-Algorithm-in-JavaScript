/*
Prime number => 2, 3, 5, 7, 11, 13, 17, ....
isPrime(5);//true
isPrime(15);//false
*/

const isPrime = (num) => {
    if(num < 2 ) return false;

    for(let i=2; i<num; i++)
    {
        if(num % i === 0)
            return false; //it's not a prime
    }

    return true;
}

console.log(isPrime(1));//false
console.log(isPrime(2));//true
console.log(isPrime(5));//true
console.log(isPrime(15));//false