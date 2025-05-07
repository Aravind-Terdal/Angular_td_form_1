import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {
  @ViewChild('userForm')userForm !:NgForm
  userFormArray !: Array<any>
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    // this.userForm.value
    console.log(this.userForm.value);
    
  }

}
