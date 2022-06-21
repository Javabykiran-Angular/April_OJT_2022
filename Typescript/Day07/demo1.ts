
let a:number[]=[4,10,78,90];

//1 Push & pop Method
//2 Splice method

//1 Push & pop Method
// It is working on LIFO principal
//last in first out

// a.push(8);
// console.log(a);
// a.push(77,100,52);
// console.log(a);
// let temp=a.pop()
// console.log(a);
// console.log("Poped Value is "+temp);

//2 Splice method

// a.splice(2,0,21);
// console.log(a);
// a.splice(2,0,34,75,80,100);
// console.log(a);
// a.splice(4,1);
// console.log(a);
// a.splice(3,2);
// console.log(a);
// a.splice(a.length-1,1,3);
// console.log(a);
// a.splice(2,1,200,800);
// console.log(a);


let b=[45,90,20,21,36,98,78,100,4,10,25,63];
//slice => It copy a section of array & return a new section of array

// let temp=b.slice(2,6);
// console.log("Original array "+b+"\n ");
// console.log("Copied Array "+temp+"\n")
// let temp1=b.slice(2);
// console.log("Copied Array "+temp1+"\n")
// let temp3=b.slice();
// console.log("Copied Array "+temp3+"\n")


//Map Function
  //element by element then u go for map function

  let c=[2,3,4,5,6];

  let res=c.map((myvalue)=>{
    return (myvalue*myvalue)
  });

  console.log("Orignal array "+c);
  console.log("Resulatant Array "+res)

  // home work filter explore 
  // use negative index on slice method check this output

  //nested of array  explore optional 


 