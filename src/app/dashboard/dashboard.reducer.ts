import * as DashboardActions from './dashboard.actions';
import * as AuthActions from '../auth/auth.actions';
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

export function reducer(state = initialState, action: DashboardActions.Actions |
  AuthActions.Actions): State {

  switch (action.type) {
    case DashboardActions.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case DashboardActions.LOAD_CHART: {
      const weights = [action.payload];
      return Object.assign({}, state, {
        charts: {
          weights
        }
      });
    }

    case DashboardActions.LOAD_SUCCESS: {
      const data = action.payload;
      return Object.assign({}, state, {
        loading: false,
        data
      });
    }

    case AuthActions.SIGN_OUT_SUCCESS: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const weightsChartSelector = (state: State) => state.charts.weights;
