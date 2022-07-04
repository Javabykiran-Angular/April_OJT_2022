import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding1',
  templateUrl: './event-binding1.component.html',
  styleUrls: ['./event-binding1.component.css']
})
export class EventBinding1Component implements OnInit {

  result:number=0;
  constructor() { }

  ngOnInit() {
  }

  onClick(mydoller){
    console.log(mydoller);
    console.log("Value is "+mydoller.target.value);
  }

  onSend(myname){
    console.log(myname);
    console.log("Value is "+myname.value)
  }
  onSend1(myvalue){
    console.log("Data is => "+myvalue);
  }

  onSend2(myobj){
    myobj.style.background='green'
    myobj.style.color='white';
  }

  onAddition(num1,num2){

    let n1=+num1;
    let n2=+num2;

      this.result=n1+n2;
  }

  onChange(myname){
    console.log("Change event Occur.....")
    myname.style.background='red';
    
  }

}
