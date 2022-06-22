// Shallow Copy & deep Copy
let a=45;
let b=a;

// console.log("Value of a "+a);
// console.log("Value of b "+b);
// b=50;
// console.log("Value of a "+a);
// console.log("Value of b "+b);


let arr=[4,7,88,90];
let arr1=arr;

// console.log(`
//       arr = ${arr}
//       arr1=${arr1}
// `);

arr1[0]=100;
// console.log(`---------------------------
//       arr = ${arr}
//       arr1=${arr1}
// `);


let c=[...arr];

console.log(`
    arr=${arr}
    c= ${c}
`)

c[0]=200;

console.log(`--------------------
    arr=${arr}
    c= ${c}
`)