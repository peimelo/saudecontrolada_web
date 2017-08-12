import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import {
  Angular2TokenService, RegisterData, ResetPasswordData,
  SignInData
} from 'angular2-token';

import { User } from "../models/user.model";

@Injectable()
export class AuthService {

  constructor(private http: Http,
              private _tokenService: Angular2TokenService) {
  }

  authenticate(credentials: SignInData): Observable<User> {
    return this._tokenService.signIn(credentials)
      .map((response: Response) => response.json().data || {})
      .catch(this._handleError);
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
