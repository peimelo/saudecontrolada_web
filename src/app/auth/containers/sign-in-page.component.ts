import {
  ChangeDetectionStrategy, Component,
  OnInit
} from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as Auth from '../actions/auth.actions';
import * as fromAuth from '../reducers';
import { SignInData } from "../models/user.model";

@Component({
  selector: 'app-sign-in-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-sign-in-form
      (submitted)="onSubmit($event)"
      [loading]="loading$ | async"
      [errorMessage]="error$ | async"
    >
    </app-sign-in-form>
  `,
})
export class SignInPageComponent implements OnInit {
  error$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromAuth.State>) {
    this.error$ = this.store.select(fromAuth.getError);
    this.loading$ = this.store.select(fromAuth.isLoading);
  }

  ngOnInit() {
  }

  onSubmit($event: SignInData) {
    this.store.dispatch(new Auth.SignInAction($event));
  }
}
