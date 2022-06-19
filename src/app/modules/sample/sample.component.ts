import { Component, OnInit } from '@angular/core';
import { RegisterLoginService } from 'src/app/core/register-login/register-login.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private registerLoginService:RegisterLoginService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.registerLoginService.loginUser().subscribe(res=>{

    })
  }

}
