import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SupervisorGuard implements CanActivate {
  returnJWT!:boolean;
  constructor(private authService:AuthService, private toastr:ToastrService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuthenticated()){
      let decodedToken = jwtDecode(`${localStorage.getItem('Token')}`);
      let jwtStr = JSON.stringify(decodedToken);
      let jwtF = JSON.parse(jwtStr).role;
      if(jwtF.toLowerCase()=='supervisor'){
        this.returnJWT = true;
        this.authService.checkUserRole.next(jwtF.toLowerCase())
      }else{
        this.toastr.error("Your role does not match with login credentials")
        this.router.navigate(['/category'])
        this.returnJWT = false;
      }
    }
    return this.returnJWT
  }
  
}
