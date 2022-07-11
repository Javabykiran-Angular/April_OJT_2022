import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

     @Output() ChildStrEvent=new EventEmitter();

     @Output() ChildJsonEvent=new EventEmitter();

     strdata:string='Sumit Raokhande of Angular Trainer';

     jsonObj={
      id:9,
      fname:'Sumit',
      status:'Active'
     }


  constructor() { }

  ngOnInit() {
  }

  onSend(){
      this.ChildStrEvent.emit(this.strdata);

      this.ChildJsonEvent.emit(this.jsonObj);
  }

}
