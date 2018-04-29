import { Injectable } from '@angular/core';
import { Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuardChildren implements CanActivateChild {

  constructor(
    private _router: Router, 
    private _authFire: AngularFireAuth
  ) {}
  
  canActivateChild(
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