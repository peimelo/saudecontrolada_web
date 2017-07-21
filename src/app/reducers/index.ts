import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

// import * as fromAuth from '../auth/auth.reducer';
import * as fromUser from '../user/user.reducer';

export interface State {
  // auth: fromAuth.State;
  router: fromRouter.RouterState;
  user: fromUser.State;
}

const reducers = {
  // auth: fromAuth.reducer,
  router: fromRouter.routerReducer,
  user: fromUser.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/**
 * Auth Reducers
 */
// export const getAuthState = (state: State) => state.auth;
// export const getLoading   = createSelector(getAuthState, fromAuth.getLoading);

/**
 * Layout Reducers
 */
// export const getLayoutState = (state: State) => state.layout;
// export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
