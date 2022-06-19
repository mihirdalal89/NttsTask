import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  editCustomerForm!:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.editCustomerForm = this.fb.group({
      id:[],
      name:['',[Validators.required]],
      age:['',[Validators.required]]
    })
  }
  @Input()getCustomerData:any;
  @Output()sendCustomerEditedData = new EventEmitter;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("from", this.getCustomerData)
    if (this.getCustomerData) {
      this.editCustomerForm.patchValue({
        id: this.getCustomerData.id,
        name: this.getCustomerData.name,
        age: this.getCustomerData.age,
      })
    }
  }

  submitEditedData(editCustomerForm:any){
    // console.log("edited data", editCustomerForm.value)
    this.sendCustomerEditedData.emit(editCustomerForm.value)
    this.editCustomerForm.reset({});
  }

}
