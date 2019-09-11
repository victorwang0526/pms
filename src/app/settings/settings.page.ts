import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private authService: AuthenticationService) {
    console.log('Settings Page Constructor');
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
