import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeedetailsComponent } from '../employeedetails/employeedetails.component';
import { FilterPipe } from '../filter.pipe';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    EmployeedetailsComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
