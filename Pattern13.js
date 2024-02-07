/*
Pattern13(4)
r1 => A B C D
r2 => A B C D
r3 => A B C D
r4 => A B C D
*/

const Pattern13 = (n) => {
    let pattern ='';

    for(let i=0; i<n; i++)
    {
        for(let j=0; j<n; j++)//cols value is based on rows
        {
            pattern += String.fromCharCode(65+j)+" ";
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(Pattern13(4));