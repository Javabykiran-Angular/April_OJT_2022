import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


    baseUrl:string="http://localhost:8080/api/";

  constructor(private http:HttpClient) { }

    logincheck(obj){
       return  (this.http.post(`${this.baseUrl}logincheck`,obj));
    }

    GetAllEmployeeData(){
     return (this.http.get(`${this.baseUrl}getallemployee`));
    }

    GetEmployeeById(id){
      return (this.http.get(`${this.baseUrl}getemployeebyid/${id}`))
    }

    getAllCountry(){

      return (this.http.get(`${this.baseUrl}getallcountry`));

    }

    addEmployee(obj){
     return (this.http.post(`${this.baseUrl}addemployee`,obj,{
        responseType:'text'
      }));
    }

    updateEmployee(obj){
      return (this.http.put(`${this.baseUrl}updateemployee`,obj,{responseType:'text'}))
    }

    DeleteRecord(id){
      return (this.http.delete(`${this.baseUrl}deleteemployee/${id}`,{responseType:'text'}));
    }


}
