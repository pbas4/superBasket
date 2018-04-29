import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HOME_ROUTES } from './home.router';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './components';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HOME_ROUTES,
    SharedModule
  ],
  providers: [ ]
})
export class HomeModule { }
