import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterLoginService } from './register-login/register-login.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    RegisterLoginService,
  ]
})
export class CoreModule { }
