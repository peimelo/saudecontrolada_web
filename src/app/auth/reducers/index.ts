import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducer';
import * as fromChangePasswordPage from './change-password-page.reducer';
import * as fromResetPasswordPage from './reset-password-page.reducer';
import * as fromSignInPage from './sign-in-page.reducer';
import * as fromSignUpPage from './sign-up-page.reducer';
import * as fromRoot from '../../reducers';

export interface AuthState {
  user: fromAuth.State;
  changePasswordPage: fromChangePasswordPage.State;
  resetPasswordPage: fromResetPasswordPage.State;
  signInPage: fromSignInPage.State;
  signUpPage: fromSignUpPage.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers = {
  user: fromAuth.reducer,
  changePasswordPage: fromChangePasswordPage.reducer,
  resetPasswordPage: fromResetPasswordPage.reducer,
  signInPage: fromSignInPage.reducer,
  signUpPage: fromSignUpPage.reducer,
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


// change password page
export const selectChangePasswordPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.changePasswordPage
);
export const getChangePasswordError = createSelector(
  selectChangePasswordPageState,
  fromSignInPage.getError
);
export const isLoadingChangePassword = createSelector(
  selectChangePasswordPageState,
  fromSignInPage.isLoading
);


// reset password page
export const selectResetPasswordPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.resetPasswordPage
);
export const getResetPasswordError = createSelector(
  selectResetPasswordPageState,
  fromSignInPage.getError
);
export const isLoadingResetPassword = createSelector(
  selectResetPasswordPageState,
  fromSignInPage.isLoading
);


// sign in page
export const selectSignInPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.signInPage
);
export const getSignInError = createSelector(
  selectSignInPageState,
  fromSignInPage.getError
);
export const isLoadingSignIn = createSelector(
  selectSignInPageState,
  fromSignInPage.isLoading
);


// sign up page
export const selectSignUpPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.signUpPage
);
export const getSignUpError = createSelector(
  selectSignUpPageState,
  fromSignUpPage.getError
);
export const isLoadingSignUp = createSelector(
  selectSignUpPageState,
  fromSignUpPage.isLoading
);
