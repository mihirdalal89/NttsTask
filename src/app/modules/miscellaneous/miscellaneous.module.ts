import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiscellaneousComponent } from './miscellaneous.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Routes=[
  {
    path:'',
    component:MiscellaneousComponent
  }
]

@NgModule({
  declarations: [
    MiscellaneousComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class MiscellaneousModule { }
