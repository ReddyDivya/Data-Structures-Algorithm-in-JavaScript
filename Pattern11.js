/*
Pattern11(4)
1
2 1
3 2 1
4 3 2 1
*/

const Pattern11 = (n) => {
    let pattern = '';
    for(let i=1; i<=n; i++)//rows
    {
        let count = i;
        for(let j=1; j<=i; j++)//cols based upon rows
        {
            pattern += count+" ";
            count--;
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(Pattern11(4));
console.log(Pattern11(5));