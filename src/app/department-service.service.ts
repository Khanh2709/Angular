import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Department} from './department';
import {Employee} from './employee';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseUrl = 'http://localhost:8080/department';

  constructor(private http: HttpClient) {
  }

  getDepartmentList(): Observable<any> {
    return this.http.get('http://localhost:8080/department').pipe(
      tap(receivedDepartments => console.log(`receivedDepartments = ${JSON.stringify(receivedDepartments)}`)),
      catchError(error => of([]))
    );
  }

  // tslint:disable-next-line:ban-types
  getDepartment(depId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${depId}`).pipe(
      tap(selectedDepartment => console.log(`selected dep = ${JSON.stringify(selectedDepartment)}`)),
      catchError(error => of(new Department())));
  }

  deleteDepartment(depId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${depId}`, {responseType: 'text'});
  }
  // tslint:disable-next-line:ban-types
  createDepartment(department: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, department);
  }
  updateDepartment(id: number, value: any): Observable<Department> {
    // @ts-ignore
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  searchDepartment(typedString: string): Observable<Department[]> {
    if (!typedString.trim()) {
      return of([]);
    }
    return this.http.get<Department[]>(`${this.baseUrl}/dep/${typedString}`).pipe(
      tap(foundedDepartment => console.log(`founded dep = ${JSON.stringify(foundedDepartment)}`)),
      catchError(error => of(null))
    );
  }
}
