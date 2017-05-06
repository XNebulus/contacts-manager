import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  isNotValidData : boolean = false;

  constructor(private auth: AuthService, private router: Router) {
    this.email = 'abc@abc.com';
    this.password = '123';
   }

  login() {
    this.auth.login(this.email, this.password).then(success => {
      if (success) {
        this.router.navigateByUrl('/');
      }
      else {
        this.isNotValidData = true;
      }
    });
    ;
  }

  ngOnInit() {
  }

}
