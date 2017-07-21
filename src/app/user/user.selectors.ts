import { createSelector } from 'reselect';

import { State } from '../reducers/index';
import * as UserReducer from './user.reducer'

/**
 * User Reducers
 */
export const getUserState = (state: State) => state.user;
export const getUser   = createSelector(getUserState, UserReducer.getUser);
