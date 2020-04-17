import { Component, OnInit } from '@angular/core';
import {Department} from '../department';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  id: number;
  lastName: string;
  firstName: string;
  // tslint:disable-next-line:variable-name
  salary_emp: number;
  public department: Department;
  active: boolean;
  constructor() {}

  ngOnInit(): void {
  }

}
