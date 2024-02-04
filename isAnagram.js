/*
Anagram
s = "anagram", t = "nagaram" => true
s = "rat", t = "car" => false
*/

//Using built-in approach
const isAnagram = (s, t) => {
    return s.split("").sort().join("") === t.split("").sort().join("");
}

console.log("Using buil-in approach");
console.log(isAnagram("anagram", "nagaram"));//true
console.log(isAnagram("rat", "car"));//false
console.log(isAnagram("top", "pot"));//true

console.log("--------------");

//Using Object approach
const isValidAnagram = (s, t) => {
    if(s.length !== t.length) return false;

    let sObject = {}, tObject = {};//objects
    
    /*
    s = {a: 3, n:1, m:1, g:1, r:1 }
    t = {n: 1, a:3, g:1, r:1, m:1 }
    */
    for(let i=0; i < s.length; i++)
    {
        sObject[i] = (sObject[i] || 0) + 1;
        tObject[i] = (tObject[i] || 0) + 1;
    }

    for(let key in sObject)
    {
        if(sObject[key] !== tObject[key]) return false;

        return true;
    }
}
console.log("Using Objects approach");
console.log(isAnagram("anagram", "nagaram"));//true
console.log(isAnagram("rat", "car"));//false
console.log(isAnagram("top", "pot"));//true

