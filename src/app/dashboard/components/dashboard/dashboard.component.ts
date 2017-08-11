import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as DashboardActions from '../../dashboard.actions';
import { DashboardService } from '../../dashboard.service';
import * as fromRoot from '../../../reducers/index';

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
  weightsChart$: Observable<any>;

  constructor(private dashboardService: DashboardService,
              private store: Store<fromRoot.State>) {

    this.store.dispatch(new DashboardActions.LoadAction());
    // this.weightsChart$ = this.dashboardService.weightsChart$();
  }
}
