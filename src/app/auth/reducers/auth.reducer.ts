import * as Auth from '../actions/auth.actions';
import { User } from '../models/user.model';

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

export function reducer(state = initialState, action: Auth.Actions): State {
  switch (action.type) {
    case Auth.SIGN_IN_SUCCESS: {
      return {
        ...state,
        authenticated: true,
        user: action.payload.user
      };
    }




    case Auth.CLEAR_ERROR: {
      return Object.assign({}, state, {
        error: undefined
      });
    }

    case Auth.SIGN_UP_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loading: false
      });

    case Auth.SIGN_UP_SUCCESS:
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

    case Auth.AUTHENTICATED_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loaded: true
      });

    case Auth.AUTHENTICATED_SUCCESS:
      return Object.assign({}, state, {
        authenticated: action.payload.authenticated,
        loaded: true,
        user: action.payload.user
      });

    case Auth.SIGN_OUT_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        user: undefined
      });

    case Auth.SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        authenticated: false,
        error: undefined,
        user: undefined
      });

    case Auth.SIGN_UP:
      return Object.assign({}, state, {
        authenticated: false,
        error: undefined,
        loading: true
      });

    default:
      return state;
  }
}

export const isAuthenticated = (state: State) => state.authenticated;
