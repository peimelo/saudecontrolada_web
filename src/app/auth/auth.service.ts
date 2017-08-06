import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Store } from '@ngrx/store';
import { createSelector } from 'reselect';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import {
  Angular2TokenService, RegisterData, ResetPasswordData,
  SignInData
} from 'angular2-token';

import * as AuthReducer from './auth.reducer';
import { State } from '../app.reducers';
import { User } from "../user/user.model";

// selectors
export const authState = (state: State) => state.auth;
export const getError        = createSelector(authState, AuthReducer.getError);
export const isAuthenticated = createSelector(authState, AuthReducer.isAuthenticated);
export const isLoading      = createSelector(authState, AuthReducer.isLoading);

@Injectable()
export class AuthService {

  constructor(private http: Http,
              private store: Store<State>,
              private _tokenService: Angular2TokenService) {
  }

  authenticate(credentials: SignInData): Observable<User> {
    return this._tokenService.signIn(credentials)
      .map((response: Response) => response.json().data || {})
      .catch(this._handleError);
  }

  error$(): Observable<string> {
    return this.store.select(getError);
  }

  isAuthenticated$(): Observable<boolean> {
    return this.store.select(isAuthenticated);
  }

  loading$(): Observable<boolean> {
    return this.store.select(isLoading);
  }

  resetPassword(email: ResetPasswordData) {
    return this._tokenService.resetPassword(email)
      .map((response: Response) => response);
  }

  signOut() {
    return this._tokenService.signOut()
      .map((response: Response) => response)
      .catch(this._handleError);
  }

  signUp(registerData: RegisterData) {
    const registerDataToBackend = {
      email: registerData.email,
      password: registerData.password,
      password_confirmation: registerData.passwordConfirmation
    };

    return this.http.post('/api/auth', registerDataToBackend)
      .map((response: Response) => response.json() || {})
      .catch(this._handleError);
  }

  validateToken() {
    return this._tokenService.validateToken()
      .map((response: Response) => response)
      .catch(this._handleError);
  }

  private _handleError (error: Response) {
    let message = 'Unknow error';

    if (error.status === 504) {
      message = 'Server error';
    } else if (error.json() && error.json().errors) {
      message = error.json().errors[0] || error.json().errors['full_messages'][0];
    }

    return Observable.throw(new Error(message));
  }
}
