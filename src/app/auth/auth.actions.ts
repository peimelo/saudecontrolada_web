import { Action } from '@ngrx/store';
import { Credentials } from './interfaces';

export const LOGIN =   '[Auth] Login';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: Credentials) { }
}

export type Actions
  = LoginAction;
