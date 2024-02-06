/*
Pattern3(4) =>

1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
*/

const Pattern3 = (rows, cols) => {
    let pattern = '';
    for(let i=1; i<=rows; i++)
    {
        for(let j=1; j<=cols; j++)
        {
            pattern += j +" ";;
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern3(4, 4));
