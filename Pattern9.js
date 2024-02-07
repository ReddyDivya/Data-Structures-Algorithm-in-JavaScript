/*
Pattern9(4)
1
2 3
4 5 6
7 8 9 10
*/

const Pattern9 = (n) => {
    let pattern = '', count = 1;
    for(let i=1; i<=n; i++)//rows
    {
        for(let j=1; j<=i; j++)//cols are based upon rows(i)
        {
            pattern += count + " ";
            count++;
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(Pattern9(4));