import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public   depId: number;
  public  depName: string;
  public listEmployee: Employee;
  constructor() { }

  ngOnInit(): void {
  }

}
