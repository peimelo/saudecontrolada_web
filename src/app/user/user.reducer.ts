import { User } from '../user/user.model';
import * as UserActions from './user.actions';

export interface State {
  user: User
}

const initialState: State = {
  user: {
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

export function reducer(state = initialState, action: UserActions.Actions): State {

  switch (action.type) {

    case UserActions.LOAD_SUCCESS: {
      const user = action.payload;
      return {
        user
      };
    }

    case UserActions.LOAD_FAILURE: {
      // const user = action.payload;
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getUser = (state: State) => state.user;
