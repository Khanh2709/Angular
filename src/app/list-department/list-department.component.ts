import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import {DepartmentService} from '../department-service.service';
import {Department} from '../department';
@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
 departments: Observable<Department[]>;
  constructor(private departmentService: DepartmentService , private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.departments = this.departmentService.getDepartmentList();
  }
  deleteDepartment(depId: number) {
    this.departmentService.deleteDepartment(depId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateDepartment(depId: number){
    this.router.navigate(['updatedepartment', depId]);
  }
}
