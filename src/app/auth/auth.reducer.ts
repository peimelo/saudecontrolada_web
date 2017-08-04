import * as AuthActions from './auth.actions';
import { User } from '../user/user.model';

export interface State {
  error: string,
  loading: boolean,
  current: User
}

const initialState: State = {
  error: '',
  loading: false,
  current: {
    id: null,
    admin: null,
    authentication_token: null,
    date_of_birth: null,
    email: null,
    gender: null,
    height: null,
    name: null,
    unconfirmed_email: null
  }
};

export function reducer(state = initialState, action: AuthActions.Actions): State {

  switch (action.type) {
    case AuthActions.SIGN_IN: {
      return Object.assign({}, state, {
        error: '',
        loading: true
      });
    }

    case AuthActions.SIGN_IN_FAILURE: {
      const error = action.payload;
      return Object.assign({}, state, {
        error,
        loading: false
      });
    }

    case AuthActions.SIGN_IN_SUCCESS: {
      const current = action.payload;
      return Object.assign({}, state, {
        loading: false,
        current,
      });
    }

    case AuthActions.SIGN_OUT_SUCCESS: {
      return initialState;
    }

    case AuthActions.SIGN_UP: {
      return Object.assign({}, state, {
        error: '',
        loading: true
      });
    }

    case AuthActions.SIGN_UP_FAILURE: {
      const error = action.payload;
      return Object.assign({}, state, {
        error,
        loading: false
      });
    }

    case AuthActions.SIGN_UP_SUCCESS: {
      const current = action.payload;
      return Object.assign({}, state, {
        loading: false,
        current,
      });
    }

    default: {
      return state;
    }
  }
}

export const errorSelector           = (state: State) => state.error;
export const isAuthenticatedSelector = (state: State) => (state.current && state.current.id ? true : false);
export const loadingSelector         = (state: State) => state.loading;
