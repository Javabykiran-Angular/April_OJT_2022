
//Anoynousmous Function

//function does not have name

   let temp1= function (){
      console.log("Anonymous Function is called ")
    }

    // temp1();

    let temp2=function (a:number,b:number):number{
      return (a+b)
    }

    let res=temp2(6,7);
    // console.log("Result is "+res);

    //Fat Arrow/Arrow Function
      let temp3=()=>{
            console.log("Fat Arrow Function is called")
          }

          // temp3();

    let temp4= (a:number,b:number):number=>{
            return (a+b);
          }

          let res1=temp4(10,7);
      console.log("Result is "+res1)
