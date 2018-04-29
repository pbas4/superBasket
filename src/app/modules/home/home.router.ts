import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AuthGuard, AuthGuardChildren } from './../shared/services';

import { HomeComponent } from './components';

const routes: Routes = [
    { path: '', redirectTo: 'sb', pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sb', component: HomeComponent, canActivate: [AuthGuard], children: [

    ]}
];

export const HOME_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);

