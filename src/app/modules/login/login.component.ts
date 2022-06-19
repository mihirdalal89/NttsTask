import { Component, OnInit } from '@angular/core';
import { RegisterLoginService } from 'src/app/core/register-login/register-login.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm!:FormGroup;
  isLoggedIn:boolean = true;
  jwt:string = "";
  constructor(
    private registerLoginService: RegisterLoginService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  login(loginValue:any){
    // console.log(loginValue);
    this.registerLoginService.loginUser().subscribe((res:any)=>{
      // if(loginValue.email == res.email)
      // debugger
      // console.log(result);
      for(let find of res){
        if(loginValue.email == find.email && loginValue.password == find.password){
          this.toastr.success('Login Successfull')
          if(find.role.toLowerCase() == 'admin'){
            this.jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1paGlyIiwicm9sZSI6IkFkbWluIn0.aKrbqgsWvsWPEoFaHAFqeNcnCmK4ecm0rzUqRuBB3kY'
          }else if(find.role.toLowerCase() == 'user'){
            this.jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1paGlyIiwicm9sZSI6IlVzZXIifQ.SOXtFAnulB3p_xHHj7XnVNG7JvdqENF4wBw3bR_YG4Q'
          }else if(find.role.toLowerCase() == 'supervisor'){
            this.jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1paGlyIiwicm9sZSI6IlN1cGVydmlzb3IifQ.el6ARKrXjWscJBwUcfK-1Jy-hxjqOrMH51F-Kk6T0ek'
          }
          localStorage.setItem('Token',this.jwt)
          localStorage.setItem('User', loginValue.email)
          let jwtRole:string = jwtDecode(`${localStorage.getItem('Token')}`);
          let jwtC = JSON.stringify(jwtRole);
          let jwtf = JSON.parse(jwtC).role;
          // console.log(jwtf);
          this.authService.checkUserRole.next(jwtf);
          
          // if(find.role.toLowerCase()==jwtf.toLowerCase()){
          //   localStorage.setItem('userType', jwtf)
          // }
          // this.authService.isAuthenticated()
          this.router.navigate(['/home']);
          this.isLoggedIn = false
          return
        }
      }
      this.toastr.error('Invalid Credentials')
      return
    },
    (err)=>{
      // console.log(err.message);
      this.toastr.error(err.message)
    }
    )
  }

}
