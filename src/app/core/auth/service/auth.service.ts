import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  checkUserRole = new BehaviorSubject('')
  checkDark = new BehaviorSubject(false)
  constructor() { }

  public isAuthenticated():boolean{
    // let token = localStorage.getItem('Token');
    return !!localStorage.getItem('Token');
  }
}
