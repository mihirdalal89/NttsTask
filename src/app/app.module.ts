import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterModule } from './modules/footer/footer.module';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
import { CoreModule } from './core/core.module';
import { HeaderModule } from './modules/header/header.module';
import { SharedModule } from './shared/shared.module';
import { LoaderInterceptor } from './core/loader/interceptor/loader.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { SampleModule } from './modules/sample/sample.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    LoginModule,
    SharedModule,
    RegisterModule,
    SampleModule,
    CoreModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  exports:[
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi:true
    },
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
