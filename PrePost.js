const PrePost = () => {
    let a = 1, b = 2;

    //a is dec to 0; b is inc to 3; 
    if(a-- > 0 && ++b > 2)//if(1>0 && 3>2)
        console.log("Stage 1 Inside If ");//this gets printed
    else
        console.log("Stage 2 Inside else ");

    
    console.log("a="+ a + "; b="+b);//a=0; b=3
}

PrePost();

/*
Output >>
Stage 1 Inside If
a=0; b=3
*/