import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import {EmployeeService} from '../employee-service.service';
@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  id: number;
  employee: Employee;
  submitted = false;
  constructor(private route: ActivatedRoute, private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = new Employee();

    this.id = this.route.snapshot.params.id;

    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => console.log(error));
  }
  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/employee']);
  }
}
