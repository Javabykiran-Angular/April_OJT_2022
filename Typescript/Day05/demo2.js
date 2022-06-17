//1 Functions has without parameter & without return type
//2 Functions has with parameter & without return type
//3 Functions has without parameter & with return type
//4 Functions has with parameter & with return type
//1 Functions has without parameter & without return type
function add1() {
    console.log('First type Function is called');
}
// add1();
//2 Functions has with parameter & without return type
function add2(a, b) {
    console.log("Addition is " + (a + b));
}
// add2(2,3);
//3 Functions has without parameter & with return type
function add3() {
    return (4 + 5);
}
var res = add3();
// console.log('Addition is '+res)
//4 Functions has with parameter & with return type
function add4(a, b) {
    return (a + b);
}
console.log("Addition is ".concat(add4(8, 8)));
