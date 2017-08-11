import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import * as moment from 'moment/moment';

@Injectable()
export class DashboardService {

  constructor(private http: Http,
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
}
