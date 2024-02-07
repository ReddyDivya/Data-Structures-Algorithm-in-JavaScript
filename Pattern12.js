/*
Pattern12(4)
A A A
B B B
C C C
D D D
*/

const Pattern12 = (n) => {
    let pattern = '';
    for(let i=0; i<n; i++)
    {
        for(let j=0; j<n; j++)
        {
            pattern += String.fromCharCode(65+i);//for every row it should change
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern12(4));