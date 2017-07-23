import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromAuth from './auth/auth.reducer';
import * as fromDashboard from './dashboard/dashboard.reducer';
import { environment } from '../environments/environment';

export interface State {
  auth: fromAuth.State;
  dashboard: fromDashboard.State;
  router: fromRouter.RouterState;
}

const reducers = {
  auth: fromAuth.reducer,
  dashboard: fromDashboard.reducer,
  router: fromRouter.routerReducer
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
