import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;

  constructor() { }

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 1000
        )
      }
    )
  }

  signOut() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = false;
            resolve(true);
          }, 10
        )
      }
    )
  }
}
