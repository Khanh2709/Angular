import { Component, OnInit } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Employee} from '../employee';
import {EmployeeService} from '../employee-service.service';
@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {
  employees$: Observable<Employee[]>;
  private searchedSubject = new Subject<string>();

  constructor( private employeeService: EmployeeService) {}
  search(searchedString: string): void {
    console.log(`searchedString = ${searchedString}`);
    this.searchedSubject.next(searchedString);
  }
  ngOnInit(): void {
    this. employees$ = this.searchedSubject.pipe(
      debounceTime(300), // wait 300ms after each keystroke before considering the searched string
      distinctUntilChanged(),
      switchMap((searchedString: string) => this.employeeService.searchEmployee(searchedString))
    );
  }

}
