import { Action } from '@ngrx/store';

export const LOAD         = '[Dashboar] Load';
export const LOAD_SUCCESS = '[Dashboar] Load Success';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: any) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction;
