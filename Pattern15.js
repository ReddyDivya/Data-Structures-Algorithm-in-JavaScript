/*
Pattern15(4)
r1 => A B C D
r2 => B C D E
r3 => C D E F
r4 => D E F G
*/

const Pattern15 = (n) => {
    let pattern = '', count = '';

    for(let i=0; i<n; i++)//rows
    {
        for(let j=0; j<n; j++)//cols are based on row no.
        {
            pattern += String.fromCharCode(65+i+j)+" ";//the value is based on count.
            count++;
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(Pattern15(4));