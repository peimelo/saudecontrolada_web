import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Angular2TokenService } from "angular2-token";

import {
  ChangePasswordData,
  RegisterData,
  ResetPasswordData,
  SignInData,
  User
} from "../models/user.model";

@Injectable()
export class AuthService {

  constructor(private http: Http,
              private _tokenService: Angular2TokenService) {
  }

  changePassword(changePasswordData: ChangePasswordData) {
    let headers = this._getHeaders(changePasswordData);

    console.log(changePasswordData);

    return this.http.put('/api/auth/password', changePasswordData, {
      headers: headers
    })
      .map((response: Response) => response.json() || {})
      .catch(this._handleError);
  }

  resetPassword(resetPasswordData: ResetPasswordData) {
    return this._tokenService.resetPassword(resetPasswordData)
      .map((response: Response) => response)
      .catch(this._handleError);
  }

  signIn(credentials: SignInData): Observable<User> {
    return this._tokenService.signIn(credentials)
      .map((response: Response) => response.json().data || {})
      .catch(this._handleError);
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

  private _getHeaders(changePasswordData): Headers {
    let headers = new Headers();
    headers.append('access-token', changePasswordData.accessToken);
    headers.append('client', changePasswordData.client);
    headers.append('expiry', changePasswordData.expiry);
    headers.append('token-type', 'Bearer');
    headers.append('uid', changePasswordData.uid);

    delete changePasswordData.accessToken;
    delete changePasswordData.client;
    delete changePasswordData.expiry;
    delete changePasswordData.uid;

    return headers;
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
