import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as DashboardActions from '../../dashboard.actions';
import * as fromRoot from '../../../reducers';
import { Observable } from 'rxjs/Observable';
import { Weight } from '../../dashboard.model';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  weights$: Observable<Weight[]>;

  constructor(private dashboardService: DashboardService,
              private store: Store<fromRoot.State>) {

    this.store.dispatch(new DashboardActions.LoadAction());

    this.weights$ = this.dashboardService.weights$();
  }

  ngOnInit() {
  }

}
