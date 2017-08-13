import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as Auth from '../actions/auth.actions';
import * as fromAuth from '../reducers';
import { ResetPasswordData } from "../models/user.model";

@Component({
  selector: 'app-reset-password-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-reset-password-form
      [errorMessage]="error$ | async"
      [loading]="loading$ | async"
      (submitted)="onSubmit($event)"
    >
    </app-reset-password-form>
  `,
})
export class ResetPasswordPageComponent {
  error$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromAuth.State>) {

    this.error$ = this.store.select(fromAuth.getResetPasswordError);
    this.loading$ = this.store.select(fromAuth.isLoadingResetPassword);

    this.store.dispatch(new Auth.ClearErrorAction());
  }

  onSubmit($event: ResetPasswordData) {
    this.store.dispatch(new Auth.ResetPasswordAction($event));
  }
}
