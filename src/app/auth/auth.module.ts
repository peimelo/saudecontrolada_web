import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AuthEffects } from './effects/auth.effects';
import { AuthService } from './services/auth.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { RecoverComponent } from './components/recover/recover.component';
import { reducers } from './reducers';
import { AuthGuard } from "./guards/auth.guard";

export const COMPONENTS = [
  RecoverComponent,
  SignInComponent,
  SignUpComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([
      { path: 'recover', component: RecoverComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent }
    ]),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),

  ],
})
export class RootAuthModule {}
