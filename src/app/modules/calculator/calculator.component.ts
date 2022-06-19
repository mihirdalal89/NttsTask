import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

declare const myTest: any

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit, OnChanges{

  
  constructor() {
    
   }

  ngOnInit(): void {
    this.addE();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  
  
  addE(){
    myTest()
  }
}
