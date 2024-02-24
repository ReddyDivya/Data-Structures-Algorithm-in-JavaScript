/*
 Post-inc/dec => incremented/decremented after usage
 Pre-inc/dec => incremented/decremented after usage
*/
const PostPreIncDec = () => {
    let i=7;
    console.log("post-inc >> "+ i++);//prints 7, but inc to 8
    console.log("pre-inc >> "+ ++i);//9
    console.log("post-dec >> "+ i--);//prints 9, but dec to 8
    console.log("pre-dec >> "+ --i);//7
}

PostPreIncDec();