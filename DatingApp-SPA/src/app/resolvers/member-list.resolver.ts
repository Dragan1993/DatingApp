import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { PaginatedResult } from '../_models/pagination';

@Injectable({
    providedIn: 'root'
  })
export class MemberListResolver implements Resolve<PaginatedResult<User[]>> {
    pageNumber = 1;
    pageSize = 5;
    constructor(private userService: UserService) {}
    resolve() {
        return this.userService.getUsers(this.pageNumber, this.pageSize);
    }
}