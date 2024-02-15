/*
Pattern27(4)
       1
     2 3
   4 5 6
 7 8 9 10
*/

const Pattern27 = (n) => {
  let pattern = '', count = 1;

  for(let i=1; i<=n; i++)
  {
    //space
    for(let space=1; space<=n-i; space++)
    {
      pattern += ' ';
    }

    //adding numbers
    for(let j=1; j<=i; j++)
    {
      pattern += count;
      count++;
    }
    pattern += "\n";//new line
  }

  return pattern;
}

console.log(Pattern27(4));

