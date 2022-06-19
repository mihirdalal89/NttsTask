import { AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/core/auth/service/auth.service';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.css']
})
export class MiscellaneousComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'email', 'zipcode'];
  public dataSource:any;
  isDark!:boolean;
  set:any;
  set2:any;
  isSet!:any;
  isString:string=""
  count:number=0
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('text',{static:false}) text!:ElementRef<HTMLDivElement>
  userData = [
    {
      id:Math.round(Math.random()*100),
      name:'Tommy',
      email:'tommy@gmail.com',
      zipcode:Math.round(Math.random()*1000000)
    },
    {
      id:Math.round(Math.random()*100),
      name:'Vandana',
      email:'vandana@gmail.com',
      zipcode:Math.round(Math.random()*1000000)
    },
    {
      id:Math.round(Math.random()*100),
      name:'Vishal',
      email:'vishal@gmail.com',
      zipcode:Math.round(Math.random()*1000000)
    },
    {
      id:Math.round(Math.random()*100),
      name:'Akshat',
      email:'akshat@gmail.com',
      zipcode:Math.round(Math.random()*1000000)
    },
    {
      id:Math.round(Math.random()*100),
      name:'Yash',
      email:'yash@gmail.com',
      zipcode:Math.round(Math.random()*1000000)
    },
    {
      id:Math.round(Math.random()*100),
      name:'Ashok',
      email:'ashok@gmail.com',
      zipcode:Math.round(Math.random()*1000000)
    },
    {
      id:Math.round(Math.random()*100),
      name:'Meena',
      email:'meena@gmail.com',
      zipcode:Math.round(Math.random()*1000000)
    },
    {
      id:Math.round(Math.random()*100),
      name:'Subhash',
      email:'subhash@gmail.com',
      zipcode:Math.round(Math.random()*1000000)
    },
    {
      id:Math.round(Math.random()*100),
      name:'Dheer',
      email:'dheer@gmail.com',
      zipcode:Math.round(Math.random()*1000000)
    },
    {
      id:Math.round(Math.random()*100),
      name:'Anita',
      email:'anita@gmail.com',
      zipcode:Math.round(Math.random()*1000000)
    },
    {
      id:Math.round(Math.random()*100),
      name:'Sanjeev',
      email:'sanjeev@gmail.com',
      zipcode:Math.round(Math.random()*1000000)
    }
  ]
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.userData);
    // debugger
    
    // this.isSet=false;
    // console.log(this.isSet);
    this.set = setInterval(()=>{
      // this.count+=1;
      this.isSet = true
    },3000)
    this.set2 = setInterval(()=>{
      this.isSet = false
    },6000)
    // setTimeout(this.hide,7000)
  }
  
  ngAfterViewInit(): void {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  ngOnDestroy(): void {
    clearInterval(this.set);
    clearInterval(this.set2);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  toggle(){
    // console.log("e")
  }
}
