import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private http:HttpClient) { }

  getSampleData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
