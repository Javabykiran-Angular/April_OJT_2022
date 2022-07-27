import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ListofuserComponent } from './listofuser/listofuser.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {
    path:"",component:ListofuserComponent
  },
  {
    path:"details",component:DetailUserComponent
  },
  {
    path:"update",component:UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
