//Anoynousmous Function
//function does not have name
var temp1 = function () {
    console.log("Anonymous Function is called ");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(6, 7);
// console.log("Result is "+res);
//Fat Arrow/Arrow Function
var temp3 = function () {
    console.log("Fat Arrow Function is called");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
var res1 = temp4(10, 7);
console.log("Result is " + res1);
