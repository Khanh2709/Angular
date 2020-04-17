import { Component, OnInit } from '@angular/core';

import {Department} from '../department';

import {ActivatedRoute, Router} from '@angular/router';
import {DepartmentService} from '../department-service.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {
  depId: number;
  department: Department;
  submitted = false;
  constructor(private departmentService: DepartmentService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.department = new Department();
    this.depId = this.route.snapshot.params.depId;
    this.departmentService.getDepartment(this.depId)
      .subscribe(data => {
        console.log(data);
        this.department = data;
      }, error => console.log(error));
  }
  updateDepartment() {
    this.departmentService.updateDepartment(this.depId, this.department)
      .subscribe(data => console.log(data), error => console.log(error));
    this.department = new Department();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateDepartment();
  }
  gotoList() {
    this.router.navigate(['/department']);
  }
}
