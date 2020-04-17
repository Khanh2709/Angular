import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeService} from './employee-service.service';
import {DepartmentService} from './department-service.service';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentSearchComponent } from './department-search/department-search.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
    EmployeeDeleteComponent,
    CreateDepartmentComponent,
    ListDepartmentComponent,
    UpdateDepartmentComponent,
    DeleteDepartmentComponent,
    EmployeeCreateComponent,
    EmployeeSearchComponent,
    EmployeeComponent,
    DepartmentComponent,
    DepartmentSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
