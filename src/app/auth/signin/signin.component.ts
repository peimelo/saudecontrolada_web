import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AuthActions from '../auth.actions';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor(private store$: Store<fromRoot.State>) { }

  onSignin(form: any) {
    const email = form.email;
    const password = form.password;

    this.store$.dispatch(new AuthActions.LoginAction({ email, password }));
  }
}
