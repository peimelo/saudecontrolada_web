import { Action } from '@ngrx/store';

import {
  ChangePasswordData,
  RegisterData,
  ResetPasswordData,
  SignInData,
  User
} from "../models/user.model";

export const CHANGE_PASSWORD         = '[Auth] Change Password';
export const CHANGE_PASSWORD_ERROR   = '[Auth] Change Password Error';
export const CHANGE_PASSWORD_SUCCESS = '[Auth] Change Password Success';

export const CLEAR_ERROR = '[Auth] Clear Error';

export const RESET_PASSWORD         = '[Auth] Reset Password';
export const RESET_PASSWORD_ERROR   = '[Auth] Reset Password Error';
export const RESET_PASSWORD_SUCCESS = '[Auth] Reset Password Success';

export const SIGN_IN         = '[Auth] Sign In';
export const SIGN_IN_ERROR   = '[Auth] Sign In Error';
export const SIGN_IN_SUCCESS = '[Auth] Sign In Success';

export const SIGN_OUT         = '[Auth] Sign Out';
export const SIGN_OUT_ERROR   = '[Auth] Sign Out Error';
export const SIGN_OUT_SUCCESS = '[Auth] Sign Out Success';

export const SIGN_UP         = '[Auth] Sign Up';
export const SIGN_UP_ERROR   = '[Auth] Sign Up Error';
export const SIGN_UP_SUCCESS = '[Auth] Sign Up Success';


export const AUTHENTICATED = '[auth] Authenticated';
export const   AUTHENTICATED_ERROR = '[auth] Authenticated error';
export const   AUTHENTICATED_SUCCESS = '[auth] Authenticated success';
export const   VALIDATE_TOKEN = '[auth] Validate token';

// reset password
export class ChangePasswordAction implements Action {
  readonly type = CHANGE_PASSWORD;

  constructor(public payload: ChangePasswordData) { }
}
export class ChangePasswordErrorAction implements Action {
  readonly type = CHANGE_PASSWORD_ERROR;

  constructor(public payload?: any) { }
}
export class ChangePasswordSuccessAction implements Action {
  readonly type = CHANGE_PASSWORD_SUCCESS;

  constructor(public payload: any) { }
}


// clear error
export class ClearErrorAction implements Action {
  readonly type = CLEAR_ERROR;

  constructor(public payload?: any) { }
}

// reset password
export class ResetPasswordAction implements Action {
  readonly type = RESET_PASSWORD;

  constructor(public payload: ResetPasswordData) { }
}
export class ResetPasswordErrorAction implements Action {
  readonly type = RESET_PASSWORD_ERROR;

  constructor(public payload?: any) { }
}
export class ResetPasswordSuccessAction implements Action {
  readonly type = RESET_PASSWORD_SUCCESS;

  constructor(public payload: any) { }
}


// sign in
export class SignInAction implements Action {
  readonly type = SIGN_IN;

  constructor(public payload: SignInData) { }
}
export class SignInErrorAction implements Action {
  readonly type = SIGN_IN_ERROR;

  constructor(public payload?: any) { }
}
export class SignInSuccessAction implements Action {
  readonly type = SIGN_IN_SUCCESS;

  constructor(public payload: { user: User }) { }
}


// sign out
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


// sign up
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

export type Actions
  = ChangePasswordAction
  | ChangePasswordErrorAction
  | ChangePasswordSuccessAction
  | ClearErrorAction
  | ResetPasswordAction
  | ResetPasswordErrorAction
  | ResetPasswordSuccessAction
  | SignInAction
  | SignInErrorAction
  | SignInSuccessAction
  | SignOutAction
  | SignOutErrorAction
  | SignOutSuccessAction
  | SignUpAction
  | SignUpErrorAction
  | SignUpSuccessAction

  | AuthenticatedAction
  | AuthenticatedErrorAction
  | AuthenticatedSuccessAction;
