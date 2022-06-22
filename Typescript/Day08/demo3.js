//Swapping variables without using 3rd variables (Js interview Question)
// 1 Addition & difference
// 2 Xor Operator
// 3 array destructuring/dereferenceing
var _a;
var a = 20;
var b = 30;
console.log("\n    Before Swapping\n      a=".concat(a, "     b= ").concat(b, "\n"));
_a = [b, a], a = _a[0], b = _a[1];
console.log("\n    After Swapping\n      a=".concat(a, "     b= ").concat(b, "\n"));
