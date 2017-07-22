import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Angular2TokenService } from 'angular2-token';
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
  login$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGIN)
    .map(toPayload)
    .switchMap((credentials) => {

      return this.authService.login(credentials)
        .map((user: User) => new AuthActions.LoginSuccessAction(user))
        .catch((error) => {
          const message = error.status === 401 ?
            error.json().errors[0] :
            'Erro na conexão com o servidor.';

          return of(new AuthActions.LoginFailureAction(message));
        });
    });

  @Effect()
  logout$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGOUT)
    .switchMap(() => {

      return this.authService.logout()
        .map(() => new AuthActions.LogoutSuccessAction())
        .catch(() => of(new AuthActions.LogoutSuccessAction()));
    });

  @Effect()
  validateToken$: Observable<Action> = this.actions$
    .ofType(AuthActions.VALIDATE_TOKEN)
    .switchMap(() => {

      return this.authService.validateToken()
        .map(() => {
          const user = this._tokenService.currentUserData;
          return new AuthActions.LoginSuccessAction(user)
        })
        .catch(() => of(new AuthActions.LogoutSuccessAction()));
    });
}
