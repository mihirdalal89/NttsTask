import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from './core/auth/service/auth.service';
import { NavigationEnd, Router , ActivatedRoute} from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { SeoService } from './core/seo/seo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges, DoCheck{
  title = 'npfl';
  isloggedin!:boolean
  constructor(private authService:AuthService, private router:Router, 
    private activatedRoute:ActivatedRoute, private seoService:SeoService){
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event=>event instanceof NavigationEnd),
      map(event => this.activatedRoute),
      map(route=>{
        while(route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route)=>route.data),   
    ).subscribe((data:any)=>{
      let seoData = data
      // console.log(data);
      this.seoService.updateTitle(seoData.title);
      this.seoService.updateDescription(seoData.description);
      this.seoService.updateCanonicalUrl(seoData.canonical);
    })
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // console.log("this.isloggedin");
  }
  
  ngDoCheck(): void {
    this.isloggedin = this.authService.isAuthenticated();
    // console.log("main", !!localStorage.getItem('Token'));
  }
  
}
