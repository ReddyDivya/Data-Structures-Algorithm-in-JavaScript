/*
Pattern28(4)
   1
  121
 12321
1234321
*/

const Pattern28 = (n) => {
    let pattern = '';

    for(let i=1; i<=n; i++)
    {
        //print spaces
        for(let space=1; space<=n-i; space++)
        {
            pattern += " ";
        }

        //print 1st traingle/increasing sequence
        for(let j=1; j<=i; j++)
        {
            pattern += j;
        }

        //print 2nd traingle/decreasing sequence
        for(let k=i-1; k >= 1; k--)
        {
            pattern += k; 
        }
        
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern28(4));