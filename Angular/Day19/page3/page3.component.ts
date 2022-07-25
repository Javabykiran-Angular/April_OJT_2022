import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

    myId:number=0;
    myUsername:string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
      this.GetdataFromUrl()
  }
  GetdataFromUrl(){
      this.route.paramMap
      .subscribe((param)=>{
          this.myId=+param.get('id');
          this.myUsername=param.get('username');
      })
  }
}
