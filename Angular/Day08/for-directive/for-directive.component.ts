import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {


  course:string[]=['Angular 8','React Js','Vue js','Embber Js','JSP'];

  selected:string='';

  productArr=[
    {
      name:"Apple",
      price: 100000,
      quantity:1
    },
    {
      name:"RealMe",
      price: 18000,
      quantity:2
    },
    {
      name:"OnePlus",
      price: 45000,
      quantity:1
    },
    {
      name:"Motorola",
      price: 30000,
      quantity:1
    }
  ];



  constructor() { }

  ngOnInit() {
  }

  onMouseOver(item){
    console.log("Mouse Over Event Occur...");
    this.selected=item.name;
  }

  onMouseOut(){
    this.selected='';
  }

}
