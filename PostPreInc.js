/*
 Post-inc/dec => incremented/decremented after usage
 Pre-inc/dec => incremented/decremented after usage
*/
const PostPreInc = () => {
    let i = 4, j = 5;
    
    //post-inc => incremented after usage
    console.log("Post-inc =>");
    let a = i++;
    console.log("a = " + a); // a = 4
    console.log("i = " + i); // i = 5

    //pre-inc => incremented before usage
    console.log("Pre-inc =>");
    let b = ++j;
    console.log("b = " + b); // b = 6
    console.log("j = " + j); // j = 6
}

PostPreInc();
