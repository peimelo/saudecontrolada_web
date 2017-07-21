import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
import * as UserActions from '../user/user.actions';
import * as AuthActions from './auth.actions';
import { User } from '../user/user.model';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private authService: AuthService) {
  }

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGIN)
    .map(toPayload)
    .switchMap((credentials) => {

      return this.authService.signin(credentials)
        .map((user: User) => new UserActions.LoadSuccessAction(user))
        .catch((error) => {
          let message = 'Erro na conexão com o servidor.';
          if (error.status === 422) {
            message = error.json().authentication_token[0];
          }
          return of(new UserActions.LoadFailureAction(message));
        });
    });
}
