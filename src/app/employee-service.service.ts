import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from './employee';
import {catchError, tap} from 'rxjs/operators';
import {Department} from './department';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/employee';
  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(
      tap(selectedEmployee => console.log(`selected emp = ${JSON.stringify(selectedEmployee)}`)),
      catchError(error => of(new Department())));
  }

  // tslint:disable-next-line:ban-types
  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee).pipe(
      tap((emp ) => console.log(`createEmployees = ${JSON.stringify(emp)}`)),
      catchError(error => of(new Employee()))
    );
  }

  // tslint:disable-next-line:ban-types
  updateEmployee(id: number, value: any): Observable<Employee> {
    // @ts-ignore
    return this.http.put(`${this.baseUrl}/${id}`, value, httpOptions).pipe(
      tap((emp: Employee) => console.log(`createEmployees = ${JSON.stringify(emp)}`)),
      catchError(error => of(new Employee())));
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getEmployeesList(): Observable<any> {
    return this.http.get('http://localhost:8080/employee').pipe(
      tap(receivedEmployees => console.log(`receivedEmployees = ${JSON.stringify(receivedEmployees)}`)),
      catchError(error => of([]))
    );
  }
  searchEmployee(typedString: string): Observable<Employee[]> {
    if (!typedString.trim()) {
      return of([]);
    }
    return this.http.get<Employee[]>(`${this.baseUrl}/lastname/${typedString}`).pipe(
      tap(foundedEmployees => console.log(`founded emp = ${JSON.stringify(foundedEmployees)}`)),
      catchError(error => of(null))
    );
  }
}
