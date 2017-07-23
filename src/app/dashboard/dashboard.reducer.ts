import * as DashboardActions from './dashboard.actions';
import { Dashboard } from './dashboard.model';

export interface State {
  loading: boolean,
  data: Dashboard,
  charts: {
    weights: any
  }
}

const initialState: State = {
  loading: false,
  data: {
    weights: []
  },
  charts: {
    weights: []
  }
};

export function reducer(state = initialState, action: DashboardActions.Actions): State {

  switch (action.type) {
    case DashboardActions.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case DashboardActions.LOAD_SUCCESS: {
      const data = action.payload;
      return Object.assign({}, state, {
        loading: false,
        data
      });
    }

    default: {
      return state;
    }
  }
}

export const getWeights = (state: State) => state.data.weights;
