import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import {Angular2TokenService, RegisterData, SignInData} from 'angular2-token';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
import * as AuthActions from './auth.actions';
import { User } from '../user/user.model';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private authService: AuthService,
              private _tokenService: Angular2TokenService) {
  }

  @Effect()
  resetPassword$: Observable<Action> = this.actions$
    .ofType(AuthActions.RESET_PASSWORD)
    .map(toPayload)
    .switchMap((email) => {

      return this.authService.resetPassword(email)
        .map((res) => {
          console.log(res);
          return new AuthActions.SignInFailureAction('')
        })
        .catch((error) => {
          const message = error.status === 401 ?
            error.json().errors[0] :
            'Erro na conexão com o servidor.';

          return of(new AuthActions.SignInFailureAction(message));
        });
    });

  @Effect()
  signIn$: Observable<Action> = this.actions$
    .ofType(AuthActions.SIGN_IN)
    .map(toPayload)
    .switchMap((credentials: SignInData) => {

      return this.authService.signIn(credentials)
        .map((user: User) => new AuthActions.SignInSuccessAction(user))
        .catch((error) => {
          const message = error.status === 401 ?
            error.json().errors[0] :
            'Erro na conexão com o servidor.';

          return of(new AuthActions.SignInFailureAction(message));
        });
    });

  @Effect()
  signOut$: Observable<Action> = this.actions$
    .ofType(AuthActions.SIGN_OUT)
    .switchMap(() => {

      return this.authService.signOut()
        .map(() => new AuthActions.SignOutSuccessAction())
        .catch(() => of(new AuthActions.SignOutSuccessAction()));
    });

  @Effect()
  signUp$: Observable<Action> = this.actions$
    .ofType(AuthActions.SIGN_UP)
    .map(toPayload)
    .switchMap((credentials: RegisterData) => {

      return this.authService.signUp(credentials)
        .map((user) => {
          console.log(user);
          return new AuthActions.SignUpSuccessAction(user)
        })
        .catch((error) => {
          const message = error.status === 422 ?
            error.json().errors['full_messages'][0] :
            'Erro na conexão com o servidor.';
// console.log(error);
          return of(new AuthActions.SignUpFailureAction(message));
        });
    });

  @Effect()
  validateToken$: Observable<Action> = this.actions$
    .ofType(AuthActions.VALIDATE_TOKEN)
    .switchMap(() => {

      return this.authService.validateToken()
        .map(() => {
          const user = this._tokenService.currentUserData;
          return new AuthActions.SignInSuccessAction(user)
        })
        .catch(() => of(new AuthActions.SignOutSuccessAction()));
    });
}
