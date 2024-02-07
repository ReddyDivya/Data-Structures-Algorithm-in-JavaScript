/*
Pattern7()
r1 => *
r2 => * *
r3 => * * *
r4 => * * * *
*/

const Pattern7 = (n) => {
    let pattern = '';

    for(let i=1; i<=n; i++)
    {
        for(let j=1; j<=i; j++)//no. of cols depends on rows
        {
            pattern += '* ';
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern7(4));