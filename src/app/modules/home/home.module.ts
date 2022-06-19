import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Routes = [
  {
    path:'',
    component:HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
