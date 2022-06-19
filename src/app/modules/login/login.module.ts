import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';


const routes:Routes = [
  {path:'', component:LoginComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
