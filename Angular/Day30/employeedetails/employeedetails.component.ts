import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {


  empobj=<Employee>{};

  constructor(private route:ActivatedRoute,
              private service:HttpService,
              private title:Title) { }

  ngOnInit() {
      this.GetDataFromUrl();
      this.title.setTitle("Admin | Details")
  }
  GetDataFromUrl(){
      this.route.paramMap
      .subscribe((param)=>{
        // console.log(param.get("id"))
        this.GetDataFromBackend(param.get("id"));
      })
  }

  GetDataFromBackend(id){
      this.service.GetEmployeeById(id)
      .subscribe((response)=>{
        // console.log(response);
        this.empobj=(<Employee>response)
      })
  }

  OnUpdate(){

  }

}
