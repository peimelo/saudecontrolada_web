import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import * as fromRoot from '../../reducers';

export interface AuthState {
  status: fromAuth.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers = {
  status: fromAuth.reducer,
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const getError = createSelector(
  selectAuthStatusState,
  fromAuth.getError
);
export const isAuthenticated = createSelector(
  selectAuthStatusState,
  fromAuth.isAuthenticated
);
export const isLoading = createSelector(
  selectAuthStatusState,
  fromAuth.isLoading
);
