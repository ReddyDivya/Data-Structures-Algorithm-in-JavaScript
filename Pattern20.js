/*
Pattern20(4)
r1 => D
r2 => C D
r3 => B C D
r4 => A B C D
*/
const Pattern20 = (n) => {
    let pattern = '', startChar;
    for(let i=1; i<=n; i++)//rows
    {
        startChar = n-i;
        for(let j=1; j<=i; j++)//cols
        {
            pattern += String.fromCharCode(65+startChar)+" ";
            startChar++;//move to next char
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern20(4));