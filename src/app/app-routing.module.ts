import { NgModule } from '@angular/core';
import { RouterLinkWithHref, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/guard/auth.guard';
import { RoleGuard } from './core/auth/guard/role.guard';
import { SupervisorGuard } from './core/auth/guard/supervisor.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'header',
    loadChildren:()=>import('./modules/header/header.module').then((m)=>m.HeaderModule),
    canActivate:[AuthGuard]
  },
  {
    path:'footer',
    loadChildren:()=>import('./modules/footer/footer.module').then((m)=>m.FooterModule),
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    loadChildren:()=>import('./modules/login/login.module').then((m)=>m.LoginModule)
  },
  {
    path:'register',
    loadChildren:()=>import('./modules/register/register.module').then((m)=>m.RegisterModule)
  },
  {
    path:'about-us',
    loadChildren:()=>import('./modules/about-us/about-us.module').then((m)=>m.AboutUsModule),
    canActivate:[AuthGuard]
  },
  {
    path:'sample',
    loadChildren:()=>import('./modules/sample/sample.module').then((m)=>m.SampleModule),
    canActivate:[AuthGuard]
  },
  {
    path:'home',
    loadChildren:()=>import('./modules/home/home.module').then((m)=>m.HomeModule),
    canActivate:[AuthGuard],
    data:{
      title:'Home Page | NTTS Home Page',
      description:"This is NTTS title page",
      canonical:"/home"
    }
  },
  {
    path:'category',
    loadChildren:()=>import('./modules/category/category.module').then((m)=>m.CategoryModule),
    canActivate:[AuthGuard, RoleGuard]
  },
  {
    path:'product',
    loadChildren:()=>import('./modules/product/product.module').then((m)=>m.ProductModule),
    canActivate:[AuthGuard, SupervisorGuard]
  },
  {
    path:'contact-us',
    loadChildren:()=>import('./modules/contact-us/contact-us.module').then((m)=>m.ContactUsModule),
  },
  {
    path:'miscellaneous',
    loadChildren:()=>import('./modules/miscellaneous/miscellaneous.module').then((m)=>m.MiscellaneousModule),
    data:{
      title:'Miscellaneous Page | NTTS Miscellaneous Page',
      description:"This is NTTS Miscellaneous page",
      canonical:"/Miscellaneous"
    }
  },
  {
    path:'component-communication',
    loadChildren:()=>import('./modules/component-communication/component-communication.module').then((m)=>m.ComponentCommunicationModule),
  },
  {
    path:'calculator',
    loadChildren:()=>import('./modules/calculator/calculator.module').then((m)=>m.CalculatorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[RoleGuard, SupervisorGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
