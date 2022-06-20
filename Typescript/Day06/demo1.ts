//Optional Parameter function



function add1(a:number,b?:number){
  console.log('Value of a is '+a) //7
  console.log('Value of b is '+b) // undefine
  console.log('Addition of a+b is '+(a+b))// NAN=> Not A Number
}

// add1(4,5)
// add1(7)

function add2(a?:number,b?:number){
  console.log('Value of a is '+a) //7
  console.log('Value of b is '+b) // undefine
  console.log('Addition of a+b is '+(a+b))// NAN=> Not A Number
}

// add2();
// add2(2,3);

//Default Parameter function

function add3(a:number,b:number=7){
  console.log('Value of a is '+a) //5
  console.log('Value of b is '+b) // 7
  console.log('Addition of a+b is '+(a+b)) //12
}

// add3(5);

function add4(a:number=4,b?:number){
  console.log('Value of a is '+a) //4
  console.log('Value of b is '+b) // undefined
  console.log('Addition of a+b is '+(a+b)) //NAN
}

// add4(8,2);
add4();