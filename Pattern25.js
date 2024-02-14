/*
Pattern25(4)
1 1 1 1
  2 2 2     
    3 3 
      4
*/

const Pattern25 = (n) => {
    let pattern = '';

    //loop through each row
    for(let i=1; i<=n; i++)
    {
        // Add spaces before printing stars
        for(let space=1; space<=i-1; space++)
        {
            pattern += " ";//print space
        }

        // Add * for each row
        for(let j=n; j>=i; j--)//cols
        {
            pattern += i+" ";
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern25(4));
