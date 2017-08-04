import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './auth.effects';
import { AuthService } from './auth.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { RecoverComponent } from './components/recover/recover.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    AppRoutingModule,
    EffectsModule.run(AuthEffects)
  ],
  declarations: [
    RecoverComponent,
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
