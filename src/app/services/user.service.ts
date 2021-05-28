import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/user/model/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    new User("Bastien", "Ederhy", "alternance@ipssi.com", "Beer ftw", ["code", "café"])
  ];
  userSubject = new Subject<any[]>();

  constructor() { }

  emitUser() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUser();
  }

}
