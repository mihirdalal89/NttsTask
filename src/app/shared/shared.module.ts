import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/modules/angular-material/angular-material.module';
import { LoaderComponent } from './components/loader/loader.component';
import { TextHoverDirective } from './directives/text-hover.directive';
import { CharExceedPipe } from './pipes/char-exceed.pipe';


@NgModule({
  declarations: [  
    LoaderComponent,
    TextHoverDirective,
    CharExceedPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LoaderComponent,
    TextHoverDirective,
    CharExceedPipe
  ]
})
export class SharedModule { }
