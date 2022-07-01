import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  
  count:number=0;
  constructor() { }

  ngOnInit() {
  }

  onClick(){

    if(this.count==0){
      console.log("Click Event Occur..")
      this.count++;
    }
   
  }

  onImage(){

    console.log("on Image click====>> ")

  }

  onSelect(){
    console.log("u r selecting Course..")
  }


}
