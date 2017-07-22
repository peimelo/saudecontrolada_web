import { Action } from '@ngrx/store';
import { SignInData } from 'angular2-token';

export const LOGIN                  = '[Auth] Login';
export const LOGIN_FAILURE          = '[Auth] Login Failure';
export const LOGIN_SUCCESS          = '[Auth] Login Success';
export const LOGOUT                 = '[Auth] Logout';
export const LOGOUT_SUCCESS         = '[Auth] Logout Success';
export const VALIDATE_TOKEN         = '[Auth] Validate Token';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: SignInData) { }
}

export class LoginFailureAction implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: string) { }
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: any) { }
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export class LogoutSuccessAction implements Action {
  readonly type = LOGOUT_SUCCESS;
}

export class ValidateTokenAction implements Action {
  readonly type = VALIDATE_TOKEN;
}

export type Actions
  = LoginAction
  | LoginFailureAction
  | LoginSuccessAction
  | LogoutAction
  | LogoutSuccessAction
  | ValidateTokenAction;
