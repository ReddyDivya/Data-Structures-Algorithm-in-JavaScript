/*
Pattern6(3)
1 2 3
4 5 6
7 8 9
*/
const Pattern6 = (n) => {
    let count = 1;
    let pattern = '';
    
    for(let i=1; i<=n; i++)
    {
        for(let j=1; j<=n; j++)
        {
            pattern += count+" ";
            count++;
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(Pattern6(3));
console.log(Pattern6(4));