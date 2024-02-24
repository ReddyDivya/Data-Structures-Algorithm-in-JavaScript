/*
 Post-inc/dec => incremented/decremented after usage
 Pre-inc/dec => incremented/decremented after usage
*/
const PostPreDec = () => {
    let i = 4, j = 5;
    
    //post-dec => decremented after usage
    console.log("Post-dec =>");
    let a = i--;
    console.log("a = " + a); // a = 4
    console.log("i = " + i); // i = 3

    //pre-dec => decremented before usage
    console.log("Pre-dec =>");
    let b = --j;
    console.log("b = " + b); // b = 4
    console.log("j = " + j); // j = 4
}

PostPreDec();
