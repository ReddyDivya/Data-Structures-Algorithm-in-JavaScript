/*
Pattern8(4)
r1 => 1
r2 => 2 2
r3 => 3 3 3
r4 => 4 4 4 4
*/
const Pattern8 = (n) => {
    let pattern = '';
    for(let i=1; i<=n; i++)//rows
    {
        for(let j=1; j<=i; j++)//cols are based upon rows(i)
        {
            pattern += i+" ";
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(Pattern8(4));