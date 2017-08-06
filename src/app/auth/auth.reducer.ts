import { Actions, ActionTypes } from './auth.actions';
import { User } from '../user/user.model';

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

export function reducer(state = initialState, action: Actions): State {

  switch (action.type) {
    case ActionTypes.CLEAR_ERROR: {
      return Object.assign({}, state, {
        error: undefined
      });
    }

    case ActionTypes.AUTHENTICATE: {
      return Object.assign({}, state, {
        error: undefined,
        loading: true
      });
    }

    case ActionTypes.AUTHENTICATE_ERROR:
    case ActionTypes.SIGN_UP_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loading: false
      });

    case ActionTypes.AUTHENTICATE_SUCCESS:
    case ActionTypes.SIGN_UP_SUCCESS:
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

    case ActionTypes.AUTHENTICATED_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loaded: true
      });

    case ActionTypes.AUTHENTICATED_SUCCESS:
      return Object.assign({}, state, {
        authenticated: action.payload.authenticated,
        loaded: true,
        user: action.payload.user
      });

    case ActionTypes.SIGN_OUT_ERROR:
      return Object.assign({}, state, {
        authenticated: true,
        error: action.payload.error.message,
        user: undefined
      });

    case ActionTypes.SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        authenticated: false,
        error: undefined,
        user: undefined
      });

    case ActionTypes.SIGN_UP:
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
