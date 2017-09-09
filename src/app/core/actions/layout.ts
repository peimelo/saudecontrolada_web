import { Action } from '@ngrx/store';

export const TOGGLE_THEME   = '[Layout] Toggle Theme';
export const TOGGLE_SIDENAV = '[Layout] Toggle Sidenav';

export class ToggleThemeAction implements Action {
  readonly type = TOGGLE_THEME;
}

export class ToggleSidenavAction implements Action {
  readonly type = TOGGLE_SIDENAV;
}

export type Actions
  = ToggleThemeAction
  | ToggleSidenavAction;
