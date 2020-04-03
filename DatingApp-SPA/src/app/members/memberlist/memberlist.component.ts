import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }
  users: User[];

  ngOnInit() {
    this.loadUser();
  } 
  loadUser() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }
}
