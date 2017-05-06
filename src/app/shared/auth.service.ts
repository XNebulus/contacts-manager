import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  loggedIn: boolean = true;
  userIsloggedIn: EventEmitter<boolean>;

  constructor() {
    this.userIsloggedIn = new EventEmitter();
  }

  login(username, password) {
    return new Promise(resolve => {
      let validCredentials: boolean = false;
      if (username === 'abc@abc.com' &&
        password === '123') {
        validCredentials = true;
        window.sessionStorage.setItem('token', 'eyJhbGciOi1');
      }
      this.userIsloggedIn.emit(validCredentials);
      resolve(validCredentials);
    });

  }

  logout(): Promise<boolean> {
    return new Promise(resolve => {
      window.sessionStorage.removeItem('token');
      this.userIsloggedIn.emit(false);
      resolve(true);
    });
  }


  isLoggedIn() {
    return !!window.sessionStorage.getItem('token');
  }

}
