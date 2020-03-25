import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  @Output() cancelEmmiter = new EventEmitter();
  constructor(private services: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.services.register(this.model).subscribe(() => {
      console.log('Registration successfull');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelEmmiter.emit(false);
    console.log('cancel');
  }
}
