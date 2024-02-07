/*
Pattern9(4)
r1 => 1
r2 => 2 3
r3 => 3 4 5
r4 => 4 5 6 7 
*/

const Pattern10 = (n) => {
    let pattern = '';
    for(let i=1; i<=n; i++)//rows
    {
        let count = i;
        for(let j=1; j<=i; j++)//cols are based upon rows(i)
        {
            pattern += count + " ";
            count++;
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(Pattern10(4));
console.log(Pattern10(5));