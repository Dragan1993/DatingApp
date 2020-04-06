import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class MemberListResolver implements Resolve<User[]> {

    constructor(private userService: UserService){}
    resolve() {
        return this.userService.getUsers();
    }
}