//Array
//array is dynamically growable & shrinkable
//Array is store hetrogenous data type
var a = [11, 22, 33];
var a1 = [42, 21, 20];
var a2 = [2.5, 'Sumit', true];
var a3 = [];
var a4 = [];
// let a5:[string,number]=[];
// a5[0]='Sumit',
// a5[1]=2.5;
var a6 = [2, 4, 9, 7, 10];
// for(let i=0;i<a.length;i++){
//   console.log("Value of a[i] is "+a[i]);
// }
// console.log("Value of array is "+a)
// console.log('Value of array\n'+a.join(' # '));
// console.log('Value of array '+a.join('\n'));
//ForEach
// a.forEach((myvalue,i)=>{
//     console.log(`Value is ${myvalue} index is ${i}`)
// });
// rest Parameter function
function Display(a) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log(item);
}
// Display('Sumit',77,89,90,10);
Display('Sumit', 77, 89, 90, 10, 55, 100, 99);
