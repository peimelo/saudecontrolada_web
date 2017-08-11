import { Injectable } from '@angular/core';
import { RegisterData, SignInData } from 'angular2-token';

// import @ngrx
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';

// import rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { AuthService } from '../services/auth.service';

// import actions
import {
  ActionTypes, AuthenticatedErrorAction, AuthenticatedSuccessAction,
  AuthenticateErrorAction,
  AuthenticateSuccessAction,
  SignOutErrorAction,
  SignOutSuccessAction, SignUpErrorAction,
  SignUpSuccessAction
} from '../actions/auth';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private authService: AuthService) {
  }

  @Effect()
  authenticate: Observable<Action> = this.actions$
    .ofType(ActionTypes.AUTHENTICATE)
    .debounceTime(500)
    .map(toPayload)
    .switchMap((credentials: SignInData) => {
      return this.authService.authenticate(credentials)
        .map(user => new AuthenticateSuccessAction({ user }))
        .catch(error => of(new AuthenticateErrorAction({ error })));
    });

  @Effect()
  public authenticated: Observable<Action> = this.actions$
    .ofType(ActionTypes.AUTHENTICATED)
    .map(toPayload)
    .switchMap(() => {
      return this.authService.validateToken()
        .map(user => new AuthenticatedSuccessAction({ authenticated: (user !== null), user: user }))
        .catch(error => of(new AuthenticatedErrorAction({ error: error })));
    });

  // @Effect()
  // resetPassword$: Observable<Action> = this.actions$
  //   .ofType(ActionTypes.RESET_PASSWORD)
  //   .map(toPayload)
  //   .switchMap((email) => {
  //
  //     return this.authService.resetPassword(email)
  //       .map((res) => {
  //         console.log(res);
  //         return new SignInFailureAction('')
  //       })
  //       .catch((error) => {
  //         const message = error.status === 401 ?
  //           error.json().errors[0] :
  //           'Erro na conexão com o servidor.';
  //
  //         return of(new SignInFailureAction(message));
  //       });
  //   });

  @Effect()
  signOut: Observable<Action> = this.actions$
    .ofType(ActionTypes.SIGN_OUT)
    .switchMap(() => {
      return this.authService.signOut()
        .map(() => new SignOutSuccessAction())
        .catch(error => of(new SignOutErrorAction({ error })));
    });

  @Effect()
  signUp$: Observable<Action> = this.actions$
    .ofType(ActionTypes.SIGN_UP)
    .debounceTime(500)
    .map(toPayload)
    .switchMap((registerData: RegisterData) => {
      return this.authService.signUp(registerData)
        .map((user) => new SignUpSuccessAction({ user }))
        .catch((error) => of(new SignUpErrorAction({ error })));
    });
}
