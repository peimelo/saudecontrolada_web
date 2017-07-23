import { Action } from '@ngrx/store';

export const LOAD         = '[Dashboar] Load';
export const LOAD_CHART   = '[Dashboar] Load Chart';
export const LOAD_SUCCESS = '[Dashboar] Load Success';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadChartAction implements Action {
  readonly type = LOAD_CHART;

  constructor(public payload: any) { }
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: any) { }
}

export type Actions
  = LoadAction
  | LoadChartAction
  | LoadSuccessAction;
