import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifydata:string='';
  constructor(private notifyService:NotificationService) { }

  ngOnInit() {
    this.GetNotificationdata();

  }
  GetNotificationdata(){
      this.notifyService.notification.subscribe((data)=>{
        this.notifydata=data;
      })
  }

}
