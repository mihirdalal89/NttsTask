import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'',
    component:CalculatorComponent
  }
]

@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CalculatorModule { }
