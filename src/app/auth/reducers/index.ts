import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import * as fromRoot from '../../reducers';

export interface AuthState {
  auth: fromAuth.State;
}

export interface State extends fromRoot.State {
  'auth': AuthState;
}

export const reducers = {
  auth: fromAuth.reducer,
};

export const authFeature = createFeatureSelector<AuthState>('auth');

export const authState = createSelector(
  authFeature,
  (state: AuthState) => state.auth
);

export const getError = createSelector(
  authState,
  fromAuth.getError
);
export const isAuthenticated = createSelector(
  authState,
  fromAuth.isAuthenticated
);
export const isLoading = createSelector(
  authState,
  fromAuth.isLoading
);
