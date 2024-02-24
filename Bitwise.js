/*
Bitwise - &, |, ~, ^
*/
const Bitwise = (a, b) => {
    console.log("Bitwise & >> ", a & b);
    console.log("Bitwise | >> ", a | b);
    console.log("Bitwise ~ >> ", ~a);
    console.log("Bitwise ^ >> ", a ^ b);
}

Bitwise(4, 6);
/*
NOT
---
one's complement of 0100, which is 1011.(MSB is 1, which means negative number)
Add 1 to the result: 0100 + 1 = 0101.
*/