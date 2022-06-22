var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Shallow Copy & deep Copy
var a = 45;
var b = a;
// console.log("Value of a "+a);
// console.log("Value of b "+b);
// b=50;
// console.log("Value of a "+a);
// console.log("Value of b "+b);
var arr = [4, 7, 88, 90];
var arr1 = arr;
// console.log(`
//       arr = ${arr}
//       arr1=${arr1}
// `);
arr1[0] = 100;
// console.log(`---------------------------
//       arr = ${arr}
//       arr1=${arr1}
// `);
var c = __spreadArray([], arr, true);
console.log("\n    arr=".concat(arr, "\n    c= ").concat(c, "\n"));
c[0] = 200;
console.log("--------------------\n    arr=".concat(arr, "\n    c= ").concat(c, "\n"));
