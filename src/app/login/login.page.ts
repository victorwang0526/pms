import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService) {
    console.log('Login Page Constructor');
  }

  ngOnInit() {
  }

  login(){
    this.authService.login();
  }
}
