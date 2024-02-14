/*
Pattern25(4)
   1
  22     
 333 
4444
*/

const Pattern26 = (n) => {
    let pattern = '';

    //loop through each row
    for(let i=1; i<=n; i++)
    {
        // Add spaces before printing stars
        for(let space=1; space<=n-i; space++)
        {
            pattern += " ";//print space
        }

        // Add * for each row
        for(let j=1; j<=i; j++)//cols
        {
            pattern += i;
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern26(4));
