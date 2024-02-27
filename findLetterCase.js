/*
Character
*/

const findLetterCase = (str) => {
    let result = '';

    for(let i=0; i<str.length; i++)
    {
        let charCode = str.charCodeAt(i);//char code of letters
        
        if(charCode >= 97 && charCode <= 122)//Lowercase
            result += str[i] + " is a lower case; ";
        else if(charCode >= 65 && charCode <= 90) //Uppercase
            result += str[i] + " is a upper case; ";
        else if(charCode >= 48 && charCode <= 57)//Numeric
            result += str[i] + " is a numeric; ";
    }

    return result;
}

console.log(findLetterCase('java'));
console.log(findLetterCase('JAVA'));
console.log(findLetterCase('2'));