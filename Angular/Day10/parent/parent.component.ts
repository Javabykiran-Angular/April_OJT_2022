import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strData:string='Data send from Parent....'

  jsonobj={
    fname:'Sumit',
    lname:'Raokhande',
    id:9
  }

    ChildStrDataReceive:string='';
    ChildJsonDataReceive={};
  constructor() { }

  ngOnInit() {
  }

}
