import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormUsersService } from '../../services/form-users.service';
import { Iusers } from '../../model/users';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {
  @ViewChild('userForm')userForm !:NgForm
  userFormArray : Array<Iusers> =[]

  constructor(
    private _usersService : FormUsersService,
    private _uuidService : UuidService
  ) { }

  ngOnInit(): void {

  }
  
  onSubmit(){
    if(this.userForm.valid){
      let newUser :Iusers = {
        ...this.userForm.value,
        id : this._uuidService.generateUuid()
      };
      this.userForm.reset()
      this._usersService.addNewUsers(newUser)
    }
  }

}
