import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Empdata:any[]=[];

  constructor(private service:HttpService,
              private title:Title) { }

  ngOnInit() {
      this.getEmpData();
      this.title.setTitle('Admin | Dashboard');
  }

  getEmpData(){
      this.service.GetAllEmployeeData()
      .subscribe((response)=>{
        // console.log(response)
        this.Empdata=(<any>response);

       
      })
  }

}
