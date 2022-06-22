// destructing/derefrence of array 

let a=[4,5,6,7];

let [t1,t2,t3,t4]=a;
console.log(a);
// console.log(`
//     T1= ${t1}    T2=${t2}
//     T3= ${t3}    T4=${t4}
// `);

let [t21,...arr]=a;
// console.log(`
//     T21=${t21}
//     arr= ${arr}
// `)

let [r1,,r2,]=a;
console.log(`
    r1=${r1}
    r2=${r2}
`)

//Hw let a=[4,5,6,7,90,45,78];