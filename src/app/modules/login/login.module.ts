import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LOGIN_ROUTES } from './login.router';

import { SharedModule } from '../shared/shared.module';

import { AuthService } from './services';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LOGIN_ROUTES,
    SharedModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }
