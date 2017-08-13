import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as Auth from '../actions/auth.actions';
import * as fromAuth from '../reducers';
import { RegisterData } from "../models/user.model";

@Component({
  selector: 'app-sign-in-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-sign-up-form
      [errorMessage]="error$ | async"
      [loading]="loading$ | async"
      (submitted)="onSubmit($event)"
    >
    </app-sign-up-form>
  `,
})
export class SignUpPageComponent {
  error$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromAuth.State>) {
    this.error$ = this.store.select(fromAuth.getSignUpError);
    this.loading$ = this.store.select(fromAuth.isLoadingSignUp);

    this.store.dispatch(new Auth.ClearErrorAction());
  }

  onSubmit($event: RegisterData) {
    this.store.dispatch(new Auth.SignUpAction($event));
  }
}
