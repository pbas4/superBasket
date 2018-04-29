import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: 'app/modules/login/login.module#LoginModule' },
    { path: 'app', loadChildren: 'app/modules/home/home.module#HomeModule' },
    { path: '**', redirectTo: 'auth' }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });

