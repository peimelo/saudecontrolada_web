import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AngularMaterialModule } from '../shared/angular-material.module';

import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { ChangePasswordPageComponent } from './containers/change-password-page.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { ResetPasswordPageComponent } from './containers/reset-password-page.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignInPageComponent } from './containers/sign-in-page.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SignUpPageComponent } from './containers/sign-up-page.component';
import { AuthEffects } from './effects/auth.effects';
import { AuthService } from './services/auth.service';
import { reducers } from './reducers';
import { AuthGuard } from './guards/auth.guard';

export const COMPONENTS = [
  ChangePasswordFormComponent,
  ChangePasswordPageComponent,
  ResetPasswordFormComponent,
  ResetPasswordPageComponent,
  SignInFormComponent,
  SignInPageComponent,
  SignUpFormComponent,
  SignUpPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule.forChild([
      { path: 'change-password', component: ChangePasswordPageComponent },
      { path: 'reset-password', component: ResetPasswordPageComponent },
      { path: 'sign-in', component: SignInPageComponent },
      { path: 'sign-up', component: SignUpPageComponent }
    ]),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}
