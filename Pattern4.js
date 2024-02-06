/*
Pattern4(3) =>

r1 => 3 3 3
r2 => 2 2 2
r3 => 1 1 1
*/

const Pattern4 = (n) => {
    let pattern = '';
    for(let i=1; i<=n; i++)
    {
        for(let j=1; j<=n; j++)
        {
            pattern += n - i + 1 +" ";;
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern4(3));
console.log(Pattern4(4));
