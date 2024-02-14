/*
Pattern19(4)
r1 => A B C D
r2 => A B C
r3 => A B
r4 => A
*/
const Pattern19 = (n) => {
    let pattern = '';
    for(let i=n; i>=1; i--)//rows
    {
        for(let j=1; j<=i; j++)//cols
        {
            pattern += String.fromCharCode(65+j-1)+" ";
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern19(4));