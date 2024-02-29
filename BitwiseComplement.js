/*
Leetcode-1009. Complement of Base 10 Integer
*/
const BitwiseComplement = (n) => {
    //Case: n=5
    //m is for storing n value. So, that we can do masking(Bruteforce idea)
    let m = n;//m=5
    let mask = 0, ans = 0;

    //edge case
    if(n == 0)
        return 1;

    while(m != 0)
    {
        /*
        step-1: Creating mask of 00000111(32 bit range)

        => left shift mask=0 value by 1 and do OR with 1 to get 
        mask = 00000111(32 bit range). 
        => So that, when we do step-3, we get the right ans=2
        */
        mask = (mask << 1) | 1;

        /*
        step-2: Making m=0000000(32 bit range)
        
        => right shift the n=5 by 1 to get m = 0000000
        => So that, we get these values 2, 1, 0 for every iteration till m=0.
        */
        m = m >> 1;
    }

    /*
    step-3: Bitwise AND the ~n=~5 & mask = 00000111
    So that, we get ans = 00000010(which is 2)
    */
    ans = (~n) & mask;//to get result
    return ans;
}

console.log(BitwiseComplement(5));//2
console.log(BitwiseComplement(7));//0
console.log(BitwiseComplement(10));//5
