import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducer';
import * as fromLoginPage from './login-page.reducer';
import * as fromRoot from '../../reducers';

export interface AuthState {
  user: fromAuth.State;
  loginPage: fromLoginPage.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers = {
  user: fromAuth.reducer,
  loginPage: fromLoginPage.reducer,
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

// auth
export const selectUserState = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);
export const isAuthenticated = createSelector(
  selectUserState,
  fromAuth.isAuthenticated
);

// login-page
export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
);
export const getError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);
export const isLoading = createSelector(
  selectLoginPageState,
  fromLoginPage.isLoading
);
