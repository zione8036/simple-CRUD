import { Injectable } from '@angular/core';
import { User } from './models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getDetails:User[] = []
  getBlogDetails(){
    return this.getDetails;
  }
}
