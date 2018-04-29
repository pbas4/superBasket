import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SubmitStateMatcher } from '../../../shared/handler/error/mat-error-handler';

import { UserService } from './../../../shared/services';
import { AuthService } from '../../services';

import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _loginForm: FormGroup;
  public errorMatcher = new SubmitStateMatcher();

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _fb: FormBuilder,
    private _router: Router
  ) { 
    this._loginForm = this._fb.group({
      'email': ['', [Validators.required, Validators.email] ],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() { 
    console.log('init login')
    this._userService.getLoggedUser();

    this._userService.loggedUser$.subscribe(
      user => { 
        if (user && user.emailVerified) {
          this._router.navigateByUrl('app');
        }
      }
    );

  }

  private _onSignin() {
    const email = this._loginForm.get('email').value;
    const password = this._loginForm.get('password').value;

    this._authService.login(email, password);
  }

}
