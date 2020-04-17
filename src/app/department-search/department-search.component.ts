import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Employee} from '../employee';
import {EmployeeService} from '../employee-service.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Department} from '../department';
import {DepartmentService} from '../department-service.service';

@Component({
  selector: 'app-department-search',
  templateUrl: './department-search.component.html',
  styleUrls: ['./department-search.component.css']
})
export class DepartmentSearchComponent implements OnInit {
  department$: Observable<Department[]>;
  private searchedSubject = new Subject<string>();

  constructor( private departmentService: DepartmentService) {}
  search(searchedString: string): void {
    console.log(`searchedString = ${searchedString}`);
    this.searchedSubject.next(searchedString);
  }
  ngOnInit(): void {
    this.department$ = this.searchedSubject.pipe(
      debounceTime(300), // wait 300ms after each keystroke before considering the searched string
      distinctUntilChanged(),
      switchMap((searchedString: string) => this.departmentService.searchDepartment(searchedString))
    );
  }
}
