import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id:number=0;
  title:string;
  body:string;
  isHidden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit() {

    this.GetPost();

  }

  GetPost(){
    this.service.getPosts()
    .subscribe((response)=>{
      console.log(response)
      this.posts=(<any>response);
    },(myerror)=>{
        // alert("Error Occured.... "+myerror.status);

        if(myerror.status>=400 && myerror.status<=499){
          console.log("Client side error Occured")
        }else if(myerror.status>=500 && myerror.status<=599)
        {
          console.log("Server side error Occured")
        }else{
          console.log("Error is occured");
        }

        
    })
  }

  onSend(mytitle,mybody){
    let obj={
      title:mytitle,
      body:mybody
    }

    this.service.Postdata(obj)
    .subscribe((response)=>{
      console.log(response);
    })


  }

  onEdit(item){
    console.log(item)
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  onUpdate(){
      let obj={
        id:this.id,
        title:this.title,
        body:this.body

      }

      this.service.UpdateData(obj)
      .subscribe((response)=>{
        console.log(response)
      })

  }

  onDelete(id){
    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response);
    })
  }

}
