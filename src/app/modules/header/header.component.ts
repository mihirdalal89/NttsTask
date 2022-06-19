import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isRole:string='';
  checkToggleForm!:FormGroup
  isDarkTheme!:boolean;
  @ViewChild('toggle') toggle:any
  @ViewChild('add') add:any
  constructor(private router:Router, private authService:AuthService, private fb:FormBuilder) {
    this.checkToggleForm = this.fb.group({
      slide:[],
    })
    // console.log(this.isRole);
   }

  ngOnInit(): void {
    this.authService.checkUserRole.subscribe(res=>{
      // console.log("subscribed value", res);
      this.isRole = res.toLowerCase();
    })

    this.checkToggleForm.controls['slide'].valueChanges.subscribe(res=>{
      // console.log(res);
      this.isDarkTheme = res;
      if(this.isDarkTheme){
        localStorage.setItem('darkmode','true')
        this.authService.checkDark.next(true)
      }
      if(!this.isDarkTheme){
        localStorage.removeItem('darkmode')
        this.authService.checkDark.next(false)
      }
    })
  }

  logout(){
    localStorage.removeItem('Token');
    localStorage.removeItem('User');
    this.router.navigate(['/login'])
  }
}
