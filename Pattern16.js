/*
Pattern16(4)
r1 => A
r2 => B B
r3 => C C C
r4 => D D D D
*/
const Pattern16 = (n) => {
    let pattern = '';
    for(let i=1; i<=n; i++)
    {
        for(let j=1; j<=i; j++)
        {
            pattern += String.fromCharCode(65+i-1)+" ";
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern16(4));