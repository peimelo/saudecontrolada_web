import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

import * as Auth from '../../auth/actions/auth.actions';
import * as fromAuth from '../../auth/reducers';
import * as Layout from '../actions/layout';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout>
      <app-sidenav [open]="showSidenav$ | async">
        <app-nav-item (activate)="closeSidenav()" *ngIf="isAuthenticated$ | async" routerLink="/" icon="book" hint="View your book collection">
          My Collection
        </app-nav-item>
        <app-nav-item (activate)="closeSidenav()" *ngIf="isAuthenticated$ | async" routerLink="/books/find" icon="search" hint="Find your next book!">
          Browse Books
        </app-nav-item>
        <app-nav-item (activate)="closeSidenav()" *ngIf="!(isAuthenticated$ | async)">
          Sign In
        </app-nav-item>
        <app-nav-item (activate)="signOut()" *ngIf="isAuthenticated$ | async">
          Sign Out
        </app-nav-item>
      </app-sidenav>
      <app-toolbar
        [isAuthenticated]="isAuthenticated$ | async"
        (openMenu)="openSidenav()"
        (signOut)="signOut()"
      >
        Saúde Controlada
      </app-toolbar>

      <router-outlet></router-outlet>
    </app-layout>
    
    
    <br>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['../../app.component.scss']
})
export class AppComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>,
              private _tokenService: Angular2TokenService) {

    this._tokenService.init({ apiBase: '/api' });

    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
  }

  ngOnInit() {
    this.isAuthenticated$ = this.store.select(fromAuth.isAuthenticated);

    // if user refresh page
    // if (this._tokenService.userSignedIn()) {
    //   this.store.dispatch(new AuthenticatedAction());
    // }
  }

  closeSidenav() {
    this.store.dispatch(new Layout.CloseSidenavAction());
  }

  openSidenav() {
    this.store.dispatch(new Layout.OpenSidenavAction());
  }

  signOut() {
    this.closeSidenav();
    this.store.dispatch(new Auth.SignOutAction());
    // this.store.dispatch(go("/"));
  }
}
