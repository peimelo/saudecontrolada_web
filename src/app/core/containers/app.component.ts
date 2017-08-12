import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

import * as Auth from '../../auth/actions/auth.actions';
import * as fromAuth from '../../auth/reducers';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-toolbar
    [isAuthenticated]="isAuthenticated$ | async"
    (signOut)="signOut()"
    >
    </app-toolbar>
    <br>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['../../app.component.scss']
})
export class AppComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>,
              private _tokenService: Angular2TokenService) {

    this._tokenService.init({ apiBase: '/api' });
  }

  ngOnInit() {
    this.isAuthenticated$ = this.store.select(fromAuth.isAuthenticated);

    // if user refresh page
    // if (this._tokenService.userSignedIn()) {
    //   this.store.dispatch(new AuthenticatedAction());
    // }
  }

  signOut() {
    this.store.dispatch(new Auth.SignOutAction());
    // this.store.dispatch(go("/"));
  }
}
