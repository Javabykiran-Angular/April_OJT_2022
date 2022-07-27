import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListofuserComponent } from './listofuser/listofuser.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
  declarations: [ListofuserComponent, DetailUserComponent, UpdateUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

