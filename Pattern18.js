/*
Pattern18(4)
r1 => A
r2 => B C
r3 => C D E
r4 => D E F G
*/
const Pattern18 = (n) => {
    let pattern = '';
    for(let i=1; i<=n; i++)//rows
    {
        for(let j=1; j<=i; j++)//cols
        {
            pattern += String.fromCharCode(65+i+j-2)+" ";
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern18(4));

/*
Formula:
r1 => 65+i+j-2 => 

65+1+1-2 => A

r2 => 
65+2+1-2 => B
65+2+2-2 => C

r3 => 
65+3+1-2 => C
65+3+2-2 => D
65+3+3-2 => E

r4 => 
65+4+1-2 => D
65+4+2-2 => E
65+4+3-2 => F
65+4+4-2 => G
*/