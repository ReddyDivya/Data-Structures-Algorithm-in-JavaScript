/*
Pattern1(4)
* * * *
* * * *
* * * *
* * * *
*/

const StarPattern = (rows, cols) => {
    let pattern = '';
    for(let i=0; i<rows; i++) //no. of rows
    {
        for(let j=0; j<cols; j++)//no. of cols in a row
        {
            pattern += "*" +" ";
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(StarPattern(4, 2));//rows, cols
console.log(StarPattern(3, 3));//rows, cols
console.log(StarPattern(7, 7));//rows, cols