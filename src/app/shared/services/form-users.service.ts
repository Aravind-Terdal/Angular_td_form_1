import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class FormUsersService {
  usersData : Array<Iusers> = []
  constructor() { }

  fetchAllUsers():Array<Iusers>{
    return  this.usersData
  }

  addNewUsers(usersObj:Iusers){
    this.usersData.push(usersObj);
  }

}
