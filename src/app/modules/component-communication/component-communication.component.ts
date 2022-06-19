import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.css']
})
export class ComponentCommunicationComponent implements OnInit {

  customers:Array<any> = [
    {
      id:1,
      name:"Tommy",
      age:15,
    },
    {
      id:2,
      name:"Vandana",
      age:55,
    },
    {
      id:3,
      name:"Vishal",
      age:60,
    },
    {
      id:4,
      name:"Mihir",
      age:22,
    },
  ]

  editCustomerData:any;

  constructor(private toastr:ToastrService) {
   }

  ngOnInit(): void {
  }

  editCustomer(event:any){
    this.editCustomerData = event
  }

  getCustomerEditedData(event:any){
    // console.log("data edited from child", event)
    this.customers[event.id-1] = event;
    this.toastr.success('Data Edited Successfully')
  }
}
