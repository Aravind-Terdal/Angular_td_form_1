import { Component, OnInit } from '@angular/core';
import { FormUsersService } from '../../services/form-users.service';
import { Iusers } from '../../model/users';

@Component({
  selector: 'app-td-form-list',
  templateUrl: './td-form-list.component.html',
  styleUrls: ['./td-form-list.component.scss']
})
export class TdFormListComponent implements OnInit {
  userData :Iusers[] =[]
  constructor(
    private _usersService : FormUsersService
  ) { }

  ngOnInit(): void {
    this.userData = this._usersService.fetchAllUsers()
  }


}
