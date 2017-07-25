import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

import { SigninComponent } from './auth/components/sign-in/sign-in.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { HomeComponent } from './core/home/home.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { RecoverComponent } from './auth/components/recover/recover.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [Angular2TokenService]
  },
  { path: 'recover', component: RecoverComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
