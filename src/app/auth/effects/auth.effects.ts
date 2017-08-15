import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { AuthService } from '../services/auth.service';
import * as Auth from '../actions/auth.actions';
import {
  ChangePasswordData,
  RegisterData,
  ResetPasswordData,
  SignInData
} from '../models/user.model';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }

  @Effect()
  changePassword$: Observable<Action> = this.actions$
    .ofType(Auth.CHANGE_PASSWORD)
    .map((action: Auth.ChangePasswordAction) => action.payload)
    .switchMap((changePasswordData: ChangePasswordData) => {
      return this.authService.changePassword(changePasswordData)
        .map((res) => new Auth.ChangePasswordSuccessAction(''))
        .catch((error) => of(new Auth.ChangePasswordErrorAction({ error })));
    });

  @Effect({ dispatch: false })
  changePasswordSuccess$ = this.actions$
    .ofType(Auth.CHANGE_PASSWORD_SUCCESS)
    .do(() => this.router.navigate(['/']));

  @Effect()
  resetPassword$: Observable<Action> = this.actions$
    .ofType(Auth.RESET_PASSWORD)
    .map((action: Auth.ResetPasswordAction) => action.payload)
    .switchMap((resetPasswordData: ResetPasswordData) => {
      return this.authService.resetPassword(resetPasswordData)
        .map((res) => new Auth.ResetPasswordSuccessAction(''))
        .catch((error) => of(new Auth.ResetPasswordErrorAction({ error })));
    });

  @Effect()
  signIn$: Observable<Action> = this.actions$
    .ofType(Auth.SIGN_IN)
    .map((action: Auth.SignInAction) => action.payload)
    .switchMap((credentials: SignInData) => {
      return this.authService.signIn(credentials)
        .map(user => new Auth.SignInSuccessAction({ user }))
        .catch(error => of(new Auth.SignInErrorAction({ error })));
    });

  @Effect({ dispatch: false })
  signInSuccess$ = this.actions$
    .ofType(Auth.SIGN_IN_SUCCESS)
    .do(() => this.router.navigate(['/']));

  @Effect()
  signOut: Observable<Action> = this.actions$
    .ofType(Auth.SIGN_OUT)
    .switchMap(() => {
      return this.authService.signOut()
        .map(() => new Auth.SignOutSuccessAction())
        .catch(error => of(new Auth.SignOutErrorAction({ error })));
    });

  @Effect()
  signUp$: Observable<Action> = this.actions$
    .ofType(Auth.SIGN_UP)
    .map((action: Auth.SignUpAction) => action.payload)
    .switchMap((registerData: RegisterData) => {
      return this.authService.signUp(registerData)
        .map((user) => new Auth.SignUpSuccessAction({ user }))
        .catch((error) => of(new Auth.SignUpErrorAction({ error })));
    });

  @Effect({ dispatch: false })
  signUpSuccess$ = this.actions$
    .ofType(Auth.SIGN_UP_SUCCESS)
    .do(() => this.router.navigate(['/']));

  // @Effect()
  // public authenticated: Observable<Action> = this.actions$
  //   .ofType(ActionTypes.AUTHENTICATED)
  //   .map(toPayload)
  //   .switchMap(() => {
  //     return this.authService.validateToken()
  //       .map(user => new AuthenticatedSuccessAction({ authenticated: (user !== null), user: user }))
  //       .catch(error => of(new AuthenticatedErrorAction({ error: error })));
  //   });
}
