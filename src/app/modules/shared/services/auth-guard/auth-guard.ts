import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { UserService } from './../user/user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  userBoolean: boolean;

  constructor(private _userService: UserService, public router: Router) {}

  getUser() {
    console.log('get user')
    this._userService.getLoggedUser();

    this._userService.loggedUser$.subscribe(
      user => {
        if (user && user.emailVerified) {
          this.userBoolean = true
        } else {
          this.userBoolean = false
        }
      }
    )
  }

  canActivate(): boolean {

    this._userService.getLoggedUser();

    const bool = this._userService.loggedUser$.subscribe(
      user => {
        if (user && user.emailVerified) {
          this.userBoolean = true
        } else {
          this.userBoolean = false
        }
      },
      err => console.log(err),
      () => { return this.userBoolean; }
    )
    // if (!this._userService.isLogged()) {
    //   this.router.navigate(['auth']);
    //   console.log('not logged')
    //   return false;
    // }
    // console.log('logged')
    return true;
  }


}