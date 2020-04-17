import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import {EmployeeUpdateComponent} from './employee-update/employee-update.component';
import {ListDepartmentComponent} from './list-department/list-department.component';
import {CreateDepartmentComponent} from './create-department/create-department.component';
import {UpdateDepartmentComponent} from './update-department/update-department.component';
import {EmployeeSearchComponent} from './employee-search/employee-search.component';


const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeListComponent },
  { path: 'employeeadd', component: EmployeeCreateComponent },
  { path: 'update/:id', component: EmployeeUpdateComponent },
  { path: 'departmentadd', component: CreateDepartmentComponent },
  { path: 'department', component: ListDepartmentComponent },
  { path: 'updatedepartment/:id', component: UpdateDepartmentComponent },
  { path: 'lastname/:id', component: EmployeeSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
