import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as AuthActions from './auth/auth.actions';
import * as fromRoot from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService,
              private store: Store<fromRoot.State>,
              private _tokenService: Angular2TokenService) {

    this._tokenService.init();
    this.isAuthenticated$ = this.authService.isAuthenticated$();
  }

  ngOnInit() {
    // if user refresh page
    if (this._tokenService.userSignedIn()) {
      this.store.dispatch(new AuthActions.ValidateTokenAction());
    }
  }

  onSignOut() {
    this.store.dispatch(new AuthActions.LogoutAction());
  }
}
