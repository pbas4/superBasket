import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private _authFire: AngularFireAuth) { }

  /**
   * Register a new user by confirming email
   * @param email 
   * @param password 
   */
  public register(email: string, password: string) {
    this._authFire.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.sendEmailVerification();
      })
      .catch(err => {
        console.error(err);
        return false
      })
  }

  /**
   * Login User
   * @param email 
   * @param password 
   */
  public login(email: string, password: string) {
    this._authFire.auth.signInWithEmailAndPassword(email, password)
      .catch(err => {
        console.error(err);
      })
  }

  /**
   * Send a verification email to the user
   */
  public sendEmailVerification() {
    const user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
      // ha dapareixer un missatge dient que tens un correu
      console.log('enviando correo...')
    }).catch(function(error) {
      console.log(error)
    });
  }

}
