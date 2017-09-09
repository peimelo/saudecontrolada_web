import * as layout from '../actions/layout';

export interface State {
  isDarkTheme: boolean;
  showSidenav: boolean;
}

const initialState: State = {
  isDarkTheme: false,
  showSidenav: false,
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };

    case layout.TOGGLE_SIDENAV:
      return {
        ...state,
        showSidenav: !state.showSidenav,
      };

    default:
      return state;
  }
}

export const isDarkTheme = (state: State) => state.isDarkTheme;
export const getShowSidenav = (state: State) => state.showSidenav;
