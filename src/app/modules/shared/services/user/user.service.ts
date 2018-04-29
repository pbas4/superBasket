import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  private loggedUser = new Subject<any>();

  loggedUser$ = this.loggedUser.asObservable();

  constructor(private _authFire: AngularFireAuth) { }

  /**
   * Check if there is a user connected
   */
  public isLogged(): any {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('user', user)
        console.log('email', user.email, 'emailVerified', user.emailVerified);
        return true
      } else {
        console.log('Ningun usuario activo');        
        return false
      }
    });
  }

  public test(): any {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('user', user)
        console.log('email', user.email, 'emailVerified', user.emailVerified);
        return user
      } else {
        console.log('Ningun usuario activo');        
        return user
      }
    });
  }

  /**
   * Send connected user
   */
  public getLoggedUser(): any {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loggedUser.next(user);
      } else {
        this.loggedUser.next(null);
      }
    });
  }

  public updateUser(name: string) {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      photoURL: ''
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))
  }
  
}
