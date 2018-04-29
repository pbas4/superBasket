import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router, 
    private _authFire: AngularFireAuth
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this._authFire.authState.map(
      user => {
      if ( !user || !user.emailVerified ) {
        this._router.navigateByUrl('');
        console.log('no auth user', user)
        return false; 
      }
      return true;
    });
  }
}