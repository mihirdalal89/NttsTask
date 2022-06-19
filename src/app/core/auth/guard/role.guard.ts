import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService:AuthService, private toastr:ToastrService, private router:Router){}
  returnJwt!:boolean;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuthenticated()){
      let decodedToken = jwtDecode(`${localStorage.getItem('Token')}`)
      let jwtstr = JSON.stringify(decodedToken)
      let jwtF = JSON.parse(jwtstr).role
      // console.log(jwtF);
      if(jwtF.toLowerCase() == 'admin'){
         this.returnJwt = true;
         this.authService.checkUserRole.next(jwtF.toLowerCase())
      }else{
        this.toastr.error("Your role does not match with login credentials")
        this.router.navigate(['/product'])
        this.returnJwt = false;
      } 
    }
    return this.returnJwt
  }
  
}
