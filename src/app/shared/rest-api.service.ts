import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crudbarang } from '../shared/crudbarang';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  /*========================================
  CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch employees list
  getCrudbrgs(): Observable<Crudbarang> {
    return this.http
      .get<Crudbarang>(this.apiURL + '/crudbarang')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch employee
  getCrudbrg(id): Observable<Crudbarang> {
    return this.http
      .get<Crudbarang>(this.apiURL + '/crudbarang/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create employee
  createCrudbrg(crudbarang): Observable<Crudbarang> {
    return this.http
      .post<Crudbarang>(
        this.apiURL + '/crudbarang',
        JSON.stringify(crudbarang),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update employee
  updateCrudbrg(id, crudbarang): Observable<Crudbarang> {
    return this.http
      .put<Crudbarang>(
        this.apiURL + '/crudbarang/' + id,
        JSON.stringify(crudbarang),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete employee
  deleteCrudbrg(id) {
    return this.http
      .delete<Crudbarang>(this.apiURL + '/crudbarang/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage:
      ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
