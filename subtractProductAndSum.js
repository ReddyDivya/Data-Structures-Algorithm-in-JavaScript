/*
Leetcode 1281: Subtract the Product and Sum of Digits of an Integer
SubtractProductSum(234);//15
*/

const subtractProductAndSum = (n) => {
    let prod = 1, sum = 0;
    while(n > 0)
    {
        let lastDigit = n%10;//fetch last digit of the n
        prod = prod * lastDigit;
        sum = sum + lastDigit;

        n = Math.floor(n/10);
    }
    return prod-sum;
}

console.log(subtractProductAndSum(234));//15
console.log(subtractProductAndSum(4421));//21