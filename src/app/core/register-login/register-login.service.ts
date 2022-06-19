import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {
  url:any = environment.baseUrl;
  checkIsLoggedIn = new BehaviorSubject(false);
  constructor(private http:HttpClient) {
    
   }
  
  registerUser(data:any): Observable<any>{
    return this.http.post(`${this.url}/userdata`, data);
  }

  loginUser(){
    return this.http.get(`${this.url}/userdata`);
  }
}
