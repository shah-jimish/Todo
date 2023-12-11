import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get(url);
  }
}
