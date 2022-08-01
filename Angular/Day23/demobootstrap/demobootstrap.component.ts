import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {


  
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

}
