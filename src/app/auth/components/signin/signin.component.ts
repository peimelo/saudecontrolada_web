import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SignInData } from 'angular2-token';

import * as AuthActions from '../../auth.actions';
import { AuthService } from '../../auth.service';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  error$: Observable<string>;
  loading$: Observable<boolean>;
  signInData: SignInData = <SignInData>{};

  constructor(private authService: AuthService,
              private store: Store<fromRoot.State>,
              private router: Router) {

    this.error$ = this.authService.error$();
    this.loading$ = this.authService.loading$();

    this.authService.isAuthenticated$()
      .subscribe((isAuthenticated: boolean) => {
        if (isAuthenticated) { this.router.navigate(['/dashboard']); }
      });
  }

  onSignin() {
    this.store.dispatch(new AuthActions.LoginAction(this.signInData));
  }
}
