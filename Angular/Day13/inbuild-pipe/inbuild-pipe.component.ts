import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strData:string='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ipsa blanditiis ipsam. Porro ab perspiciatis, eveniet quidem quisquam minima tempore deserunt, beatae aliquam nihil, cum voluptas molestiae unde? Hic, ab.';
  
   num2:number=-452.78956324557;

   mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
