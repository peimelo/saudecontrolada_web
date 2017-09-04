import { Routes } from '@angular/router';

import { HomeComponent } from './core/components/home.component';
import { NotFoundPageComponent } from './core/containers/not-found-page';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'oauth_callback', component: HomeComponent },
  { path: '**', component: NotFoundPageComponent },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   canActivate: [Angular2TokenService]
  // },
];
