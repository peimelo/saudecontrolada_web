import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { DashboardService } from './dashboard.service';
import * as DashboardActions from './dashboard.actions';

@Injectable()
export class DashboardEffects {

  constructor(private actions$: Actions,
              private dashboardService: DashboardService) {
  }

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(DashboardActions.LOAD)
    .switchMap(() => {

      return this.dashboardService.getDashboard()
        .map((dashboard) => new DashboardActions.LoadSuccessAction(dashboard));
        // .catch((error) => {
        //   const message = error.status === 401 ?
        //     error.json().errors[0] :
        //     'Erro na conexão com o servidor.';
        //
        //   return of(new DashboardActions.LoginFailureAction(message));
        // });
    });

  @Effect()
  loadSuccess$: any = this.actions$
    .ofType(DashboardActions.LOAD_SUCCESS)
    .map(toPayload)
    .switchMap((dashboard) => {

      return this.dashboardService.getWeightsChart(dashboard.weights)
        .map((weightsChart) => {
          return new DashboardActions.LoadChartAction(weightsChart)
        });
        // .catch((error) => {
        //   const message = error.status === 401 ?
        //     error.json().errors[0] :
        //     'Erro na conexão com o servidor.';
        //
        //   return of(new DashboardActions.LoginFailureAction(message));
        // });
    });
}
