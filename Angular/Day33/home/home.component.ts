import { Component, OnInit, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { Employee } from '../model/employee';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Empdata:any[]=[];
  empobj=<Employee>{};

  isRdaioSelect:boolean=false;

  modalRef: BsModalRef;  
  config = {
    animated: true,    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };

  constructor(private service:HttpService,
              private title:Title,
              private modalservice:BsModalService,
              private dialogservice:DialogService ) { }

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


  onEdit(item){
    // console.log(item)
    this.isRdaioSelect=true;
    this.empobj=item;
  }

  IsRadioCheck(){
    if(this.isRdaioSelect)
    return true;
    else
    return false
  }

  onUpdate(popup: TemplateRef<any>){
    if(this.IsRadioCheck()){
      //update a record
      
      this.modalRef = this.modalservice.show(popup, this.config);

    }else{
      alert("Please Select a record to Update !!!")
    }

  }

  onDelete(){
    if(this.IsRadioCheck()){
      //delete a record

      this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
      .afterClosed()
      .subscribe((res)=>{
        console.log(res);
        if(res){
          //Delete the record..
          this.service.DeleteRecord(this.empobj.id)
          .subscribe((response)=>{
            console.log(response);
            this.getEmpData();
          })
          }else{
          //Don't delete the record
          }
          
      })

    }else{
      alert("Please Select a record to Delete !!!");
    }
  }


}
