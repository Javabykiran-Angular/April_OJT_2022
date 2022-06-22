//Swapping variables without using 3rd variables (Js interview Question)
// 1 Addition & difference
// 2 Xor Operator
// 3 array destructuring/dereferenceing

let a=20;
let b=30;

console.log(`
    Before Swapping
      a=${a}     b= ${b}
`);

[a,b] = [b,a];
console.log(`
    After Swapping
      a=${a}     b= ${b}
`)
