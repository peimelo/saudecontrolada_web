import { ChangeDetectionStrategy, Component } from '@angular/core';

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
      [errorMessage]="error$ | async"
      [loading]="loading$ | async"
      (submitted)="onSubmit($event)"
    >
    </app-sign-in-form>
  `,
  styles: [`
    /*:host {*/
      /*display: flex;*/
      /*flex: 1;*/
    /*}*/
  `]
})
export class SignInPageComponent {
  error$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromAuth.State>) {
    this.error$ = this.store.select(fromAuth.getSignInError);
    this.loading$ = this.store.select(fromAuth.isLoadingSignIn);

    this.store.dispatch(new Auth.ClearErrorAction());
  }

  onSubmit($event: SignInData) {
    this.store.dispatch(new Auth.SignInAction($event));
  }
}
