import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { createSelector } from 'reselect';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService, SignInData } from 'angular2-token';

import * as AuthReducer from './auth.reducer';
import * as fromRoot from '../reducers';

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
      // .map((response: Response) => response);
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

// {
//   "fxQKTn3VA5WBfjvqO6gYGw":
//   {
//     "token":"$2a$10$jW2.liW8eN.5t65bEzRmK.iEIwpwJ/k27/J5NOV0cjJjQS1lhliUu",
//     "expiry":1501891764,
//     "last_token":"$2a$10$6agCwirQKW.WmigiBTKY2.0X6aQu4FPBM3Ix5wUY.Gso52jbgzBHe",
//     "updated_at":"2017-07-21T21:09:24.565-03:00"
//   },
//   "TJsSWugmKVcxDVzxlfJuUg":
//   {
//     "token":"$2a$10$3PP0p0HC3e8C9x.3SCER5u3nWn6UGClqv6YsiiifIe/8z.hevYzCq",
//     "expiry":1501891818,
//     "last_token":"$2a$10$DB2Ea934VOUaq7o44UsUz.3oxrRGtDHQtuon4Dn.g6/KCjuLDwCj2",
//     "updated_at":"2017-07-21T21:10:18.432-03:00"
//   }
// }
