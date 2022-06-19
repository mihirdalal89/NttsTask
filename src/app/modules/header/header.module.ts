import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Routes = [
  {path:'', component: HeaderComponent}
]

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule.forChild(routes) 
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
