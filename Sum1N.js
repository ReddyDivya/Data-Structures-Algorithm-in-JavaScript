const Sum1N = (n) => {
    let sum = 0;
    for(let i=1; i<=n; i++)
    {
        sum += i;
    }

    return sum;
}

console.log(Sum1N(5));//15