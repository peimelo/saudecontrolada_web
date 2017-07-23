import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './auth.effects';
import { AuthService } from './auth.service';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AngularMaterialModule } from '../shared/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    EffectsModule.run(AuthEffects)
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
