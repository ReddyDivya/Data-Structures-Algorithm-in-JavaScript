/*
Pattern21(4)
1234
 234
  34
   4
*/
const  Pattern21 = (n) => {
    let pattern = '';

    //loop through each row
    for(let i=1; i<=n; i++)//rows
    {
        // Add spaces before printing stars
        for(let space=1; space<=i-1; space++)
        {
            pattern += " ";//print space
        }

        // Add * for each row
        for(let j=1; j<=i; j++)//cols
        {
            pattern += j;
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern21(4));