import { Action } from '@ngrx/store';
import {RegisterData, ResetPasswordData, SignInData} from 'angular2-token';

// import type function
import { User } from "../../user/user.model";

export const AUTHENTICATE = '[auth] Authenticate';
export const   AUTHENTICATE_ERROR = '[auth] Authenticate error';
export const   AUTHENTICATE_SUCCESS = '[auth] Authenticate success';
export const AUTHENTICATED = '[auth] Authenticated';
export const   AUTHENTICATED_ERROR = '[auth] Authenticated error';
export const   AUTHENTICATED_SUCCESS = '[auth] Authenticated success';
export const   CLEAR_ERROR = '[auth] Clear error';
export const   RESET_PASSWORD = '[auth] Reset password';
export const   RESET_PASSWORD_FAILURE = '[auth] Reset password failure';
export const   RESET_PASSWORD_SUCCESS = '[auth] Reset password success';
export const   SIGN_OUT = '[auth] Sign out';
export const   SIGN_OUT_ERROR = "[users] Sign out error";
export const   SIGN_OUT_SUCCESS = '[auth] Sign out success';
export const   SIGN_UP = '[auth] Sign Up';
export const   SIGN_UP_ERROR = '[auth] Sign up error';
export const   SIGN_UP_SUCCESS = '[auth] Sign up success';
export const   VALIDATE_TOKEN = '[auth] Validate token';
// };

// export const ActionTypes = {
//   AUTHENTICATE: type('[auth] Authenticate'),
//   AUTHENTICATE_ERROR: type('[auth] Authenticate error'),
//   AUTHENTICATE_SUCCESS: type('[auth] Authenticate success'),
//   AUTHENTICATED: type('[auth] Authenticated'),
//   AUTHENTICATED_ERROR: type('[auth] Authenticated error'),
//   AUTHENTICATED_SUCCESS: type('[auth] Authenticated success'),
//   CLEAR_ERROR: type('[auth] Clear error'),
//   RESET_PASSWORD: type('[auth] Reset password'),
//   RESET_PASSWORD_FAILURE: type('[auth] Reset password failure'),
//   RESET_PASSWORD_SUCCESS: type('[auth] Reset password success'),
//   SIGN_OUT: type('[auth] Sign out'),
//   SIGN_OUT_ERROR: type("[users] Sign out error"),
//   SIGN_OUT_SUCCESS: type('[auth] Sign out success'),
//   SIGN_UP: type('[auth] Sign Up'),
//   SIGN_UP_ERROR: type('[auth] Sign up error'),
//   SIGN_UP_SUCCESS: type('[auth] Sign up success'),
//   VALIDATE_TOKEN: type('[auth] Validate token')
// };

export class AuthenticateAction implements Action {
  readonly type = AUTHENTICATE;

  constructor(public payload: SignInData) { }
}

export class AuthenticateErrorAction implements Action {
  readonly type = AUTHENTICATE_ERROR;

  constructor(public payload?: any) { }
}

export class AuthenticateSuccessAction implements Action {
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(public payload: { user: User }) { }
}

export class AuthenticatedAction implements Action {
  public type: string = AUTHENTICATED;

  constructor(public payload?: {token?: string}) {}
}

export class AuthenticatedSuccessAction implements Action {
  public type: string = AUTHENTICATED_SUCCESS;

  constructor(public payload: { authenticated: boolean, user: User }) {}
}

export class AuthenticatedErrorAction implements Action {
  public type: string = AUTHENTICATED_ERROR;

  constructor(public payload?: any) {}
}

export class ClearErrorAction implements Action {
  readonly type = CLEAR_ERROR;

  constructor(public payload?: any) { }
}

export class ResetPasswordAction implements Action {
  readonly type = RESET_PASSWORD;

  constructor(public payload: ResetPasswordData) { }
}

export class SignOutAction implements Action {
  readonly type = SIGN_OUT;

  constructor(public payload?: any) { }
}

export class SignOutErrorAction implements Action {
  readonly type = SIGN_OUT_ERROR;

  constructor(public payload?: any) { }
}

export class SignOutSuccessAction implements Action {
  readonly type = SIGN_OUT_SUCCESS;

  constructor(public payload?: any) { }
}

export class SignUpAction implements Action {
  readonly type = SIGN_UP;

  constructor(public payload: RegisterData) { }
}

export class SignUpErrorAction implements Action {
  readonly type = SIGN_UP_ERROR;

  constructor(public payload?: any) { }
}

export class SignUpSuccessAction implements Action {
  readonly type = SIGN_UP_SUCCESS;

  constructor(public payload: { user: User }) { }
}

export type Actions
  =
  AuthenticateAction
  | AuthenticateErrorAction
  | AuthenticateSuccessAction
  | AuthenticatedAction
  | AuthenticatedErrorAction
  | AuthenticatedSuccessAction
  | ClearErrorAction
  | SignOutAction
  | SignOutSuccessAction
  | SignUpAction
  | SignUpErrorAction
  | SignUpSuccessAction;
