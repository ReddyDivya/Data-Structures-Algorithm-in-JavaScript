/*
Pattern5(4) =>

r1 => 4 3 2 1
r2 => 4 3 2 1
r3 => 4 3 2 1
r4 => 4 3 2 1
*/

const Pattern5 = (n) => {
    let pattern = '';
    for(let i=1; i<=n; i++)
    {
        for(let j=1; j<=n; j++)
        {
            pattern += n - j + 1 +" ";;
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern5(3));
console.log(Pattern5(4));
