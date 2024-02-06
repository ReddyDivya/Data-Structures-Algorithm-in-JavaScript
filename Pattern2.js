/*
Pattern2(3)
1 1 1
2 2 2
3 3 3
*/

const NumberPattern = (num) => {
    let pattern = '';
    for(let i=1; i<=num; i++) //no. of rows
    {
        for(let j=1; j<=num; j++)//no. of cols in a row
        {
            pattern += i +" ";
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(NumberPattern(3));//rows=cols
console.log(NumberPattern(4));//rows=cols
console.log(NumberPattern(6));//rows=cols