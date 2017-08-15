import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as Auth from '../actions/auth.actions';
import * as fromAuth from '../reducers';
import { ChangePasswordData } from "../models/user.model";

@Component({
  selector: 'app-change-password-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-change-password-form
      [email]="email"
      [errorMessage]="error$ | async"
      [loading]="loading$ | async"
      (submitted)="onSubmit($event)"
    >
    </app-change-password-form>
  `,
})
export class ChangePasswordPageComponent implements OnInit {
  email: string;
  error$: Observable<string>;
  loading$: Observable<boolean>;
  queryParams = {};

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<fromAuth.State>) {

    this.queryParams = this.activatedRoute.snapshot.queryParams;
    this.email = this._getParam(this.queryParams['uid']);
    console.log(this.queryParams);

    this.error$ = this.store.select(fromAuth.getChangePasswordError);
    this.loading$ = this.store.select(fromAuth.isLoadingChangePassword);

    this.store.dispatch(new Auth.ClearErrorAction());
  }

  ngOnInit() {
  }

  onSubmit($event: ChangePasswordData) {
    $event.accessToken = this._getParam(this.queryParams['token']);
    $event.client      = this._getParam(this.queryParams['client_id']);
    $event.expiry      = this._getParam(this.queryParams['expiry']);
    $event.uid         = this._getParam(this.queryParams['uid']);

    this.store.dispatch(new Auth.ChangePasswordAction($event));
  }

  // Sometime returns {'uid':'xxx'} or {'uid':['aaa','bbb']}
  private _getParam(param: string) {
    if (Object.prototype.toString.call(param) === '[object Array]') {
      const paramLength = param.length;
      return param[paramLength - 1];
    }
    else {
      return param;
    }
  }
}
