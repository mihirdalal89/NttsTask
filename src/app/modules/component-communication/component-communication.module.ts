import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCommunicationComponent } from './component-communication.component';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';


const routes:Routes = [
  {
    path:'',
    component:ComponentCommunicationComponent
  }
]

@NgModule({
  declarations: [
    ComponentCommunicationComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentCommunicationModule { }
