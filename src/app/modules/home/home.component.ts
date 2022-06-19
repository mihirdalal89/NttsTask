import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, of, pluck, switchMap } from 'rxjs';
import { RegisterLoginService } from 'src/app/core/register-login/register-login.service';
import { WebApiService } from 'src/app/core/web-api/web-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inputSearchForm!:FormGroup
  source:any=[];
  filteredData=[];
  constructor(
     private registerLoginService:RegisterLoginService,
     private webApiService:WebApiService,
     private fb:FormBuilder
     ) {
      this.inputSearchForm=this.fb.group({
        searchTerm:[''],
      })
      }

  ngOnInit(): void {
    this.getData();
    this.webApiService.getSampleData().subscribe(res=>{
      this.source = res;
    })
  }

  getData(){
      this.inputSearchForm.controls['searchTerm'].valueChanges.subscribe(res=>{
        if(res==''){
          this.webApiService.getSampleData().subscribe(res=>{
            this.source = res;
          })
        }else{
        // console.log(res);
        this.webApiService.getSampleData().pipe(
          map((users:any)=>users.filter((user:any)=>user.username.toLowerCase()==res)),
        ).subscribe((res:any)=>{
          // console.log(res);
          this.source=res
        })
      }
      })      
  }
  // getData(){
  //   this.registerLoginService.loginUser().pipe(
  //     map((users:any)=>users.filter((user:any)=>user.role=='USER'&&user.email=='abc@gmail.com'))
  //   )
  //   .subscribe((res:any) =>{
  //     console.log(res);
  //     });
  // }
  // pipe(
  //   map((value:any)=>{
  //     let newarr = value.filter((val:any)=>{
  //       return val.role=='USER' && val.number=='1098297987'
  //     })
  //     console.log(newarr);
  //   }),
  // ).
}

