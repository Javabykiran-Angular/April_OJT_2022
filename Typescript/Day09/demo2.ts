export class Myclass{
  //Property
 public id:number;
 private fname:string;
  protected lname:string;

  constructor(f:string,l:string,id:number){
    this.fname=f;
    this.lname=l;
    this.id=id;
  }
 


  display(){
    console.log(`
        Id    :: ${this.id}
    First Name:: ${this.fname}
    Last Name :: ${this.lname}
    `)
  }


}

// let obj=new Myclass("Sumit",'Raokhande',9);
// obj.display();


export function add(a:number,b:number){
    return (a+b);
}

export const pi=3.14;

