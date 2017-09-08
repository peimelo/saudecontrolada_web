import {
  ActionReducer, ActionReducerMap, createFeatureSelector,
  createSelector, MetaReducer
} from "@ngrx/store";
import * as fromRouter from '@ngrx/router-store';

import { environment } from '../../environments/environment';
import { RouterStateUrl } from '../shared/utils';
import * as fromLayout from '../core/reducers/layout';

export interface State {
  layout: fromLayout.State;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  routerReducer: fromRouter.routerReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);
