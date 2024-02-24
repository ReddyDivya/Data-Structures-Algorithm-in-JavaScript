/*
 Post-inc/dec => incremented/decremented after usage
 Pre-inc/dec => incremented/decremented after usage
*/

const SumPostInc = () => {
    let i=11;
    let a = i++;//11; value is incremented after usage

    let sum = a + i;//12+11=23
    console.log("sum with post-inc >> "+ sum);
}

SumPostInc();