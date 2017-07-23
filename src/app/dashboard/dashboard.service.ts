import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { createSelector } from 'reselect';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from 'angular2-token';
import * as moment from 'moment/moment';

import * as DashboardReducer from './dashboard.reducer';
import { Weight } from './dashboard.model';
import * as fromRoot from '../app.reducers';

/**
 * Selectors
 */
export const getDashboardState = (state: fromRoot.State) => state.dashboard;
export const getWeights        = createSelector(getDashboardState, DashboardReducer.getWeights);
export const getWeightsChart   = createSelector(getDashboardState, DashboardReducer.getWeightsChart);

@Injectable()
export class DashboardService {

  constructor(private http: Http,
              private store: Store<fromRoot.State>,
              private _tokenService: Angular2TokenService) {
  }

  getDashboard() {
    return this.http.get('/api/dashboards', {
      headers: this._tokenService.currentAuthHeaders
    })
      .map((response: Response) => response.json() || {});
  }

  getWeightsChart(weights) {
    const weightsChart = { name: 'Peso', series: [] };

    for (var i = 0; i < weights.length; i++) {
      weightsChart.series.push({
        name: moment(weights[i].date).toDate(),
        value: weights[i].value
      });
    }

    return [weightsChart];
  }

  weights$(): Observable<Weight[]> {
    return this.store.select(getWeights);
  }

  weightsChart$(): Observable<any> {
    return this.store.select(getWeightsChart);
  }
}
