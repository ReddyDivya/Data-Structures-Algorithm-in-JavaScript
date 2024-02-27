/*
Leetcode-67. Add Binary
AddBinary(11, 1);//100
AddBinary(1010, 1011);//10101

Concept of Binary Addition.
------------
1+1=0 with carry 1
1+0=1 with carry 0
0+1=1 with carry 0
0+0=0 with carry 0
Imp:1+1=1 with carry 1 if previous carry was 1.
The carry gets added in next step(scanning from right to left).
*/
const AddBinary = (a, b) => {
    
}

console.log(AddBinary(11, 1));//100
console.log(AddBinary(1010, 1011));//10101
