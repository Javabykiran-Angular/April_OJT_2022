import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-parameter',
  templateUrl: './query-parameter.component.html',
  styleUrls: ['./query-parameter.component.css']
})
export class QueryParameterComponent implements OnInit {

  jsonobj={
    myid:0,
    myname:'',
    mystatus:''
  }

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.GetdataFromUrl();
  }

  GetdataFromUrl(){
      this.route.queryParamMap
      .subscribe((param)=>{
        this.jsonobj.myid=+param.get("id")
        this.jsonobj.myname=param.get("name");
        this.jsonobj.mystatus=param.get("status")
      })
  }

}
