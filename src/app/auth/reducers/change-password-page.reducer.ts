import * as Auth from '../actions/auth.actions';

export interface State {
  error: string | null;
  loading: boolean;
}

export const initialState: State = {
  error: null,
  loading: false,
};

export function reducer(state = initialState, action: Auth.Actions): State {
  switch (action.type) {
    case Auth.CLEAR_ERROR: {
      return {
        ...state,
        error: null
      };
    }

    case Auth.CHANGE_PASSWORD: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }

    case Auth.CHANGE_PASSWORD_ERROR: {
      return {
        ...state,
        error: action.payload.error.message,
        loading: false,
      };
    }

    case Auth.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
      };
    }


    default: {
      return state;
    }
  }
}

export const getError = (state: State) => state.error;
export const isLoading = (state: State) => state.loading;
