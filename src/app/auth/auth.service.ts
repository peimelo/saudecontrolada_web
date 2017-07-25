import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { createSelector } from 'reselect';
import { Observable } from 'rxjs/Observable';
import {
  Angular2TokenService, ResetPasswordData,
  SignInData
} from 'angular2-token';

import * as AuthReducer from './auth.reducer';
import * as fromRoot from '../app.reducers';

/**
 * Selectors
 */
export const authState = (state: fromRoot.State) => state.auth;
export const errorSelector           = createSelector(authState, AuthReducer.errorSelector);
export const isAuthenticatedSelector = createSelector(authState, AuthReducer.isAuthenticatedSelector);
export const loadingSelector         = createSelector(authState, AuthReducer.loadingSelector);

@Injectable()
export class AuthService {

  constructor(private store: Store<fromRoot.State>,
              private _tokenService: Angular2TokenService) {
  }

  error$(): Observable<string> {
    return this.store.select(errorSelector);
  }

  isAuthenticated$(): Observable<boolean> {
    return this.store.select(isAuthenticatedSelector);
  }

  loading$(): Observable<boolean> {
    return this.store.select(loadingSelector);
  }

  resetPassword(email: ResetPasswordData) {
    return this._tokenService.resetPassword(email)
      .map((response: Response) => response);
  }

  signIn(credentials: SignInData) {
    return this._tokenService.signIn(credentials)
      .map((response: Response) => response.json().data || {});
  }

  signOut() {
    return this._tokenService.signOut()
      .map((response: Response) => response);
  }

  validateToken() {
    return this._tokenService.validateToken()
      .map((response: Response) => response);
  }
}
