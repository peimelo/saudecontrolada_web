import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { createSelector } from 'reselect';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService, SignInData } from 'angular2-token';

import * as AuthReducer from './auth.reducer';
import * as fromRoot from '../app.reducers';

/**
 * Selectors
 */
export const getAuthState       = (state: fromRoot.State) => state.auth;
export const getError           = createSelector(getAuthState, AuthReducer.getError);
export const getIsAuthenticated = createSelector(getAuthState, AuthReducer.getIsAuthenticated);
export const getLoading         = createSelector(getAuthState, AuthReducer.getLoading);

@Injectable()
export class AuthService {

  constructor(private store: Store<fromRoot.State>,
              private _tokenService: Angular2TokenService) {
  }

  error$(): Observable<string> {
    return this.store.select(getError);
  }

  isAuthenticated$(): Observable<boolean> {
    return this.store.select(getIsAuthenticated);
  }

  loading$(): Observable<boolean> {
    return this.store.select(getLoading);
  }

  login(credentials?: SignInData) {
    return this._tokenService.signIn(credentials)
      .map((response: Response) => response.json().data || {});
  }

  logout() {
    return this._tokenService.signOut()
      .map((response: Response) => response);
  }

  validateToken() {
    return this._tokenService.validateToken()
      .map((response: Response) => response);
  }
}
