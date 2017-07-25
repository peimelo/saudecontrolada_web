import { Action } from '@ngrx/store';
import { ResetPasswordData, SignInData } from 'angular2-token';

export const RESET_PASSWORD         = '[Auth] Reset Password';
export const RESET_PASSWORD_FAILURE = '[Auth] Reset Password Failure';
export const RESET_PASSWORD_SUCCESS = '[Auth] Reset Password Success';
export const SIGN_IN                = '[Auth] Sign in';
export const SIGN_IN_FAILURE        = '[Auth] Sign in Failure';
export const SIGN_IN_SUCCESS        = '[Auth] Sign in Success';
export const SIGN_OUT               = '[Auth] Sign Out';
export const SIGN_OUT_SUCCESS       = '[Auth] Sign Out Success';
export const VALIDATE_TOKEN         = '[Auth] Validate Token';

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

export class ValidateTokenAction implements Action {
  readonly type = VALIDATE_TOKEN;
}

export type Actions
  = SignInAction
  | SignInFailureAction
  | SignInSuccessAction
  | SignOutAction
  | SignOutSuccessAction
  | ValidateTokenAction;
