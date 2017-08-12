import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AngularMaterialModule } from '../shared/angular-material.module';

import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RecoverComponent } from './components/recover/recover.component';
import { SignInPageComponent } from "./containers/sign-in-page.component";
import { AuthEffects } from './effects/auth.effects';
import { AuthService } from './services/auth.service';
import { reducers } from './reducers';
import { AuthGuard } from "./guards/auth.guard";

export const COMPONENTS = [
  RecoverComponent,
  SignInFormComponent,
  SignInPageComponent,
  SignUpComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule.forChild([
      { path: 'recover', component: RecoverComponent },
      { path: 'sign-in', component: SignInPageComponent },
      { path: 'sign-up', component: SignUpComponent }
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
