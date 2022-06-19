import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from 'src/app/core/loader/service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  isLoading!:boolean;
  constructor(private loaderService:LoaderService) {
    this.loaderService.isLoading.subscribe(res=>{
      this.isLoading = res;
    })
  }
  
  ngOnInit(): void {
    
  }

}
