import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './components';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];

export const LOGIN_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);

