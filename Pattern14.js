/*
Pattern15(4)
A B C D
E F G H
I J K L
*/

const Pattern14 = (n) => {
    let pattern = '', count = 0;
    for(let i=0; i<n; i++)
    {
        for(let j=0; j<n; j++)
        {
            pattern += String.fromCharCode(65 + count)+" ";
            count++;
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(Pattern14(4));