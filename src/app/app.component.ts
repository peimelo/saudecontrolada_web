import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as AuthActions from './auth/auth.actions';
import * as fromRoot from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService,
              private router: Router,
              private store: Store<fromRoot.State>,
              private _tokenService: Angular2TokenService) {

    this._tokenService.init({ apiBase: '/api' });
    this.isAuthenticated$ = this.authService.isAuthenticated$();
  }

  ngOnInit() {
    // if user refresh page
    if (this._tokenService.userSignedIn()) {
      this.store.dispatch(new AuthActions.ValidateTokenAction());
    }
  }

  onSignOut() {
    this.store.dispatch(new AuthActions.SignOutAction());
    this.router.navigate(['/']);
  }
}
