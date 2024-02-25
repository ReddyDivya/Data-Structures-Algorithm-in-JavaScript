const VariableScope = () => {
    let a = 3;
    console.log("Global Scoping >>> ", a);
    {
        let a = 10;
        console.log("block-1 - local Scoping >>> ", a);//10
    }

    {
        let a = 20;
        console.log("block-2 - local Scoping >>> ", a);//20

        {
            let a = 30;
            console.log("block-3 - local Scoping >>> ", a);//30
        }
        console.log("block-2 - local Scoping >>> ", a);//20
    }

    console.log("Global Scoping >>> ", a);//3
}

VariableScope();