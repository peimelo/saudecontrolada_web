// import { User } from '../user/user.model';
// import * as AuthActions from './auth.actions';
//
// export interface State {
//   loading: boolean,
//   user: User
// }
//
// const initialState: State = {
//   loading: false,
//   user: {
//     id: null,
//     admin: null,
//     authentication_token: null,
//     date_of_birth: null,
//     email: null,
//     gender: null,
//     height: null,
//     name: null,
//     unconfirmed_email: null
//   }
// };
//
// export function reducer(state = initialState, action: AuthActions.Actions): State {
//
//   switch (action.type) {
//
//     case AuthActions.LOGIN: {
//       return Object.assign({}, state, {
//         loading: true
//       });
//     }
//
//     default: {
//       return state;
//     }
//   }
// }
//
// export const getLoading = (state: State) => state.loading;
