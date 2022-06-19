import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { tap } from 'rxjs';
import { RegisterLoginService } from 'src/app/core/register-login/register-login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hidePassword = true;
  hideConfirmPassword = true;
  loader!:boolean;
  registerForm!:FormGroup;
  roles:any = [
    "USER",
    "ADMIN",
    "SUPERVISOR"
  ]
  constructor(
    private fb:FormBuilder, 
    private registerLogin:RegisterLoginService, 
    private toastr:ToastrService,
    private router:Router,
    ) {
    this.registerForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      number:['',[Validators.required, Validators.maxLength(10)]],
      role:['', [Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
    },
    {
      validator: this.checkIfMatchingPasswords('password', 'confirmPassword'),
    }
    )
  }
  
  ngOnInit(): void {
    
  }


  checkIfMatchingPasswords(passwordKey:string, confirmPasswordKey: string){
    return(group:FormGroup)=>{
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if(password.value == confirmPassword.value){
        return;
      }else{
        confirmPassword.setErrors({
          notEqualToPassword: true,
        })
      }
    }
  }

  // confirmPassword(control:AbstractControl):boolean{
  //   if(control.get('password')?.value !== control.get('confirmPassword')?.value){
  //     return {invalid:true};
  //   }
  // }

  login(){
    this.registerLogin.loginUser().subscribe(res=>{
      // console.log(res);
      if(res){
        this.toastr.success("Success")
        // console.log(res);
      }
    },
    (err)=>{
      // console.log(err);
    }
    )
  }

  register(data:any){
    this.loader=true;
    this.registerLogin.registerUser(data)
    .subscribe(res=>{
      if(res){
      this.toastr.success('Registration Successfull');
      this.registerForm.reset();
      this.router.navigate(['/login']);
      }
    },
    (err)=>{
      this.toastr.error(err.message);
    }
    )
  }
}
