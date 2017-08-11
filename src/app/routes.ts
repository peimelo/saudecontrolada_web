import { Routes } from '@angular/router';

import { HomeComponent } from './core/components/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   canActivate: [Angular2TokenService]
  // },
];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
