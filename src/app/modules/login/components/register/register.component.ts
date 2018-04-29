import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { SubmitStateMatcher } from '../../../shared/handler/error/mat-error-handler';

import { AuthService } from './../../services/auth/auth.service';
import { UserService } from '../../../shared/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class RegisterComponent {

  private _registerForm: FormGroup;
  public errorMatcher = new SubmitStateMatcher();  

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _fb: FormBuilder
  ) { 
    this._registerForm = this._fb.group({
      'name': ['', Validators.required ],
      'email': ['', [ Validators.required, Validators.email ] ],
      'password': ['', [ Validators.required, Validators.minLength(6) ]]
    })
  }

  private _onRegister(): void {
    const name = this._registerForm.get('name').value;
    const email = this._registerForm.get('email').value;
    const password = this._registerForm.get('password').value;

    this._authService.register(email, password);
    // this._userService.updateUser(name);
  }

}
