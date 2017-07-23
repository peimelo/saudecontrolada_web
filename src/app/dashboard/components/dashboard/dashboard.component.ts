import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as DashboardActions from '../../dashboard.actions';
import { Weight } from '../../dashboard.model';
import { DashboardService } from '../../dashboard.service';
import * as fromRoot from '../../../app.reducers';

@Component({
  selector: 'app-dashboard',
  template:  `
    <md-card>
      <md-card-title>Dashboard</md-card-title>
      <md-card-content>
        <app-line-chart [data]="weightsChart$ | async"></app-line-chart>
      </md-card-content>
    </md-card>
  `,
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  weights$: Observable<Weight[]>;
  weightsChart$: Observable<any>;

  constructor(private dashboardService: DashboardService,
              private store: Store<fromRoot.State>) {

    this.store.dispatch(new DashboardActions.LoadAction());

    this.weights$ = this.dashboardService.weights$();
    this.weightsChart$ = this.dashboardService.weightsChart$();
  }
}
