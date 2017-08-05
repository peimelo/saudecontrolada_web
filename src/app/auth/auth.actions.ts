import { Action } from '@ngrx/store';
import {RegisterData, ResetPasswordData, SignInData} from 'angular2-token';

export const CLEAR_ERROR            = '[Auth] Clear Error';

export const RESET_PASSWORD         = '[Auth] Reset Password';
export const RESET_PASSWORD_FAILURE = '[Auth] Reset Password Failure';
export const RESET_PASSWORD_SUCCESS = '[Auth] Reset Password Success';

export const SIGN_IN                = '[Auth] Sign In';
export const SIGN_IN_FAILURE        = '[Auth] Sign In Failure';
export const SIGN_IN_SUCCESS        = '[Auth] Sign In Success';

export const SIGN_OUT               = '[Auth] Sign Out';
export const SIGN_OUT_SUCCESS       = '[Auth] Sign Out Success';

export const SIGN_UP                = '[Auth] Sign Up';
export const SIGN_UP_FAILURE        = '[Auth] Sign Up Failure';
export const SIGN_UP_SUCCESS        = '[Auth] Sign Up Success';

export const VALIDATE_TOKEN         = '[Auth] Validate Token';

/**
 * Actions
 */
export class ClearErrorAction implements Action {
  readonly type = CLEAR_ERROR;
}

export class ResetPasswordAction implements Action {
  readonly type = RESET_PASSWORD;

  constructor(public payload: ResetPasswordData) { }
}

export class SignInAction implements Action {
  readonly type = SIGN_IN;

  constructor(public payload: SignInData) { }
}

export class SignInFailureAction implements Action {
  readonly type = SIGN_IN_FAILURE;

  constructor(public payload: string) { }
}

export class SignInSuccessAction implements Action {
  readonly type = SIGN_IN_SUCCESS;

  constructor(public payload: any) { }
}

export class SignOutAction implements Action {
  readonly type = SIGN_OUT;
}

export class SignOutSuccessAction implements Action {
  readonly type = SIGN_OUT_SUCCESS;
}

export class SignUpAction implements Action {
  readonly type = SIGN_UP;

  constructor(public payload: RegisterData) { }
}

export class SignUpFailureAction implements Action {
  readonly type = SIGN_UP_FAILURE;

  constructor(public payload: string) { }
}

export class SignUpSuccessAction implements Action {
  readonly type = SIGN_UP_SUCCESS;

  constructor(public payload: any) { }
}

export class ValidateTokenAction implements Action {
  readonly type = VALIDATE_TOKEN;
}

export type Actions
  = ClearErrorAction
  | SignInAction
  | SignInFailureAction
  | SignInSuccessAction
  | SignOutAction
  | SignOutSuccessAction
  | SignUpAction
  | SignUpFailureAction
  | SignUpSuccessAction
  | ValidateTokenAction;
