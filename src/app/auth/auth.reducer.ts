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
    case AuthActions.LOGIN: {
      return Object.assign({}, state, {
        error: '',
        loading: true
      });
    }

    case AuthActions.LOGIN_FAILURE: {
      const error = action.payload;
      return Object.assign({}, state, {
        error,
        loading: false
      });
    }

    case AuthActions.LOGIN_SUCCESS: {
      const current = action.payload;
      return Object.assign({}, state, {
        loading: false,
        current,
      });
    }

    case AuthActions.LOGOUT_SUCCESS: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getError           = (state: State) => state.error;
export const getIsAuthenticated = (state: State) => (state.current && state.current.id ? true : false);
export const getLoading         = (state: State) => state.loading;
