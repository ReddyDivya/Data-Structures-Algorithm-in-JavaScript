/*
Pattern17(4)
r1 => A
r2 => B C
r3 => D E F
r4 => G H I J
*/
const Pattern17 = (n) => {
    let pattern = '', value= 0;
    for(let i=1; i<=n; i++)
    {
        for(let j=1; j<=i; j++)
        {
            pattern += String.fromCharCode(65+value)+" ";
            value++;
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern17(4));