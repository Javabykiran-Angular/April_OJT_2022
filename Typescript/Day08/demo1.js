// destructing/derefrence of array 
var a = [4, 5, 6, 7];
var t1 = a[0], t2 = a[1], t3 = a[2], t4 = a[3];
console.log(a);
// console.log(`
//     T1= ${t1}    T2=${t2}
//     T3= ${t3}    T4=${t4}
// `);
var t21 = a[0], arr = a.slice(1);
// console.log(`
//     T21=${t21}
//     arr= ${arr}
// `)
var r1 = a[0], r2 = a[2];
console.log("\n    r1=".concat(r1, "\n    r2=").concat(r2, "\n"));
