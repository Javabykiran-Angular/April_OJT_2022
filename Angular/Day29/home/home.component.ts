import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Empdata:any[]=[];

  constructor(private service:HttpService) { }

  ngOnInit() {
      this.getEmpData();
  }

  getEmpData(){
      this.service.GetAllEmployeeData()
      .subscribe((response)=>{
        // console.log(response)
        this.Empdata=(<any>response);
      })
  }

}
