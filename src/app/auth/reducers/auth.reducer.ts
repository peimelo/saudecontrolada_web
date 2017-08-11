import * as auth from '../actions/auth';
import { User } from '../../user/user.model';

export interface State {
  authenticated: boolean;
  error?: string,
  loading: boolean,
  user?: User
}

const initialState: State = {
  authenticated: false,
  loading: false
};

export function reducer(state = initialState, action: auth.Actions): State {

  switch (action.type) {
    case auth.CLEAR_ERROR: {
      return Object.assign({}, state, {
        error: undefined
      });
    }

    case auth.AUTHENTICATE: {
      return Object.assign({}, state, {
        error: undefined,
        loading: true
      });
    }

    case auth.AUTHENTICATE_ERROR:
    case auth.SIGN_UP_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loading: false
      });

    case auth.AUTHENTICATE_SUCCESS:
    case auth.SIGN_UP_SUCCESS:
      const user: User = action.payload.user;

      // verify user is not null
      if (user === null) {
        return state;
      }

      return Object.assign({}, state, {
        authenticated: true,
        error: undefined,
        loading: false,
        user: user
      });

    case auth.AUTHENTICATED_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loaded: true
      });

    case auth.AUTHENTICATED_SUCCESS:
      return Object.assign({}, state, {
        authenticated: action.payload.authenticated,
        loaded: true,
        user: action.payload.user
      });

    case auth.SIGN_OUT_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        user: undefined
      });

    case auth.SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        authenticated: false,
        error: undefined,
        user: undefined
      });

    case auth.SIGN_UP:
      return Object.assign({}, state, {
        authenticated: false,
        error: undefined,
        loading: true
      });

    default:
      return state;
  }
}

export const getError        = (state: State) => state.error;
export const isAuthenticated = (state: State) => state.authenticated;
export const isLoading       = (state: State) => state.loading;
