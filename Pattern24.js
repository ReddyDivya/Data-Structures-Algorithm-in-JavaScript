/*
Pattern24(4)
* * * *
* * *      
* *  
* 
*/

const Pattern24 = (n) => {
    let pattern = '';

    //loop through each row
    for(let i=1; i<=n; i++)
    {
        // Add * for each row
        for(let j=n; j>=i; j--)//cols
        {
            pattern += "* ";
        }

        // Add spaces before printing stars
        for(let space=1; space<=i-1; space++)
        {
            pattern += " ";//print space
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern24(4));
