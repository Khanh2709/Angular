import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee} from '../employee';
import {EmployeeService} from '../employee-service.service';
import {Department} from '../department';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  submitted = false;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
  }
    save() {
      this.employeeService.createEmployee(this.employee)
        .subscribe(data => console.log(data), error => console.log(error));
      this.employee = new Employee();
      this.gotoList();
    }

    onSubmit() {
      this.submitted = true;
      this.save();
    }

    gotoList() {
      this.router.navigate(['/employee']);
    }
}
