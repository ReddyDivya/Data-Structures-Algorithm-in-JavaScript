/*
Pattern29(5)
1234554321
1234**4321
123****321
12******21
1********1
*/

const Pattern29 = (n) => {
    let pattern = '';

    for(let i=1; i<=n; i++)//rows
    {
        //1st traingle
        for(let j=1; j<=n-i+1; j++)
        {
            pattern += j;
        }

        //space traingle
        for(let space=1; space<=(i-1)*2; space++ )
        {
            pattern += "*";
        }

        for(let k=n; k>=i; k--)
        {
            pattern += k-i+1;
        }
        pattern += "\n";
    }

    return pattern;
}

console.log(Pattern29(5));