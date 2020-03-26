import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('successfully logged');
    }, error => {
      this.alertify.error('Invalid username or password');
    });
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
  loggedId() {
    return this.authService.loggedIn();
  }
}
