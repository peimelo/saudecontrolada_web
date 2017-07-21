import { Action } from '@ngrx/store';
import { User } from './user.model';

export const LOAD_FAILURE = '[User] Load Failure';
export const LOAD_SUCCESS = '[User] Load Success';

export class LoadFailureAction implements Action {
  readonly type = LOAD_FAILURE;

  constructor(public payload: string) { }
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: User) { }
}

export type Actions
  = LoadFailureAction
  | LoadSuccessAction;
