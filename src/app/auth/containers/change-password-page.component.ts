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

    this.email = this.queryParams['uid'];
    this.error$ = this.store.select(fromAuth.getChangePasswordError);
    this.loading$ = this.store.select(fromAuth.isLoadingChangePassword);

    this.store.dispatch(new Auth.ClearErrorAction());
  }

  ngOnInit() {
  }

  onSubmit($event: ChangePasswordData) {
    $event.client =      this.queryParams['client_id'];
    $event.expiry =      this.queryParams['expiry'];
    $event.accessToken = this.queryParams['token'];
    $event.uid =         this.queryParams['uid'];

    this.store.dispatch(new Auth.ChangePasswordAction($event));
  }
}
