const SumPreInc = () => {
    let i=11;
    let a = ++i;//12; initially value is incremented

    let sum = a + (++i);//12+(12+1)=25
    console.log("sum with pre-inc >> "+ sum);
}

SumPreInc();