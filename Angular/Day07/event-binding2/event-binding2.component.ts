import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  result:number=0;
  name:string='';
  mycourse:string='';
  constructor() { }

  ngOnInit() {
  }

  onKeyUp(){
    console.log("Key Up Event Occur..")
  }

  onKeyDown(){
    console.log("Key Down Event Occur..")
  }

  onKeyEnter(){
    console.log("Enter key is pressed...")
  }

  onSelect(){
    console.log("===>>>> "+this.mycourse);
    // this.mycourse+=" Thank U for Selecting";

  }

  onCourseSelect(){

    if(this.mycourse==''){
      alert("Plz Select a Course ");
    }else{
      alert("Thank U for Selecting Course "+this.mycourse)
    }

  }

}
