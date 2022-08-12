import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  allCountry:any[]=[];
  constructor(private service:HttpService,
              private router:Router,
              private title:Title) { }

  ngOnInit() {
      this.GetAllCountry();
      this.title.setTitle("Admin | Add Employee")
  }

GetAllCountry(){
      this.service.getAllCountry()
        .subscribe((response)=>{
          this.allCountry=(<any>response);
        })
}

  onSubmit(f:NgForm){

    let obj={
      name:f.value.name,
      phoneno:f.value.phoneno,
      departmentit:f.value.departmentit,
      status:f.value.status,
      country:f.value.country,
      createdby:sessionStorage.getItem("username"),
      createddtm:Date.now(),
      updatedby:sessionStorage.getItem("username"),
      updateddtm:Date.now()
    }
    this.service.addEmployee(obj)
    .subscribe((response)=>{
      // console.log(response);
        this.router.navigate(['/home'])
    })


  }

}
