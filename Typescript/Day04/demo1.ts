
//literal

var a:number|string;
a=2.5;
// console.log(`Value of a is ${a}`);
a='Sumit';
// console.log(`Value of a is ${a}`);
// a=true;
var b!:50|'Sumit';
// b=50;
// b='Sumit'
// console.log('value of b is '+b)

enum Size{small=2,Medium,Large};
// console.log("Value of enum Medium "+Size.Medium);
// console.log("Value of enum Large "+Size.Large);

enum Size1{s=28,m=30,l=40,xl=42}
// console.log("Value of Size1 "+Size1.xl)

type size=number|string;
var str:size;
str=2.5;
// console.log("Str value is "+str);
str='Sumit';
// console.log("Str value is "+str);

//Type Assertion
// any/object
var str1:any;
//1 angle bracket 
//2 as syntax 

//1 angle bracket

var temp=(<string> str1); 
//  temp.

//2 as syntax

var temp1=(str1 as string);
// temp1.










