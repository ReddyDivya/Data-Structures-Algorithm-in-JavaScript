/*
Pattern22(4)
   *    
  **  
 *** 
****
*/
const Pattern22 = (n) => {
    let pattern = '';

    //loop through each row
    for(let i=1; i<=n; i++)//rows
    {
        // Add spaces before printing stars
        for(let space=1; space<=n-i; space++)
        {
            pattern += " ";//print space
        }

        // Add * for each row
        for(let j=1; j<=i; j++)//cols
        {
            pattern += "*";
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern22(4));