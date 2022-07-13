import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {

 // inpuTag="Email <input type='text'>";
//  inpuTag="<h2>Email Id </h2>";

  mybg:string='myPrimary';
  name='Email::';


  constructor() { }

  ngOnInit() {
  }

}
