import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as AuthActions from '../../auth/actions/auth.actions';
import * as LayoutActions from '../actions/layout';
import * as fromAuth from '../../auth/reducers';
import * as fromLayout from '../reducers';
import * as fromRoot from '../../reducers';
import * as navItems from '../data/nav-items.json';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div fxLayout="column" fxFlex [class.dark-theme]="isDarkTheme$ | async">
      <app-toolbar
        [isAuthenticated]="isAuthenticated$ | async"
        (toggleMenu)="toggleSidenav()"
        (toggleTheme)="toggleTheme()"
        (signOut)="signOut()"
      >
      </app-toolbar>

      <md-sidenav-container fxFlex>
        <md-sidenav mode="side" [opened]="showSidenav$ | async">
          <md-nav-list>
            <span *ngFor="let navItem of navItems">
              <app-nav-item
                *ngIf="navItem.isAuthenticated ? (isAuthenticated$ | async) : !(isAuthenticated$ | async)"
                routerLink="{{ navItem.link }}"
                icon="{{ navItem.icon }}"
                hint="{{ navItem.hint }}"
              >
                {{ navItem.label }}
              </app-nav-item>
            </span>
            <app-nav-item
              *ngIf="isAuthenticated$ | async"
              (activate)="signOut()"
              icon="power_settings_new">
              Sair
            </app-nav-item>
          </md-nav-list>
        </md-sidenav>
        <div class="content" fxLayout="row" fxLayout.sm="column"
             fxLayoutGap="16px">
          <router-outlet></router-outlet>
        </div>
      </md-sidenav-container>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex: 1;
    }

    md-sidenav {
      width: 320px;
    }

    .content {
      padding: 12px;
    }
  `]
})
export class AppComponent implements OnInit {
  isDarkTheme$: Observable<boolean>;
  isAuthenticated$: Observable<boolean>;
  navItems = navItems;
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.isAuthenticated$ = this.store.select(fromAuth.isAuthenticated);
    this.isDarkTheme$ = this.store.select(fromLayout.isDarkTheme);
    this.showSidenav$ = this.store.select(fromLayout.getShowSidenav);
  }

  signOut() {
    this.store.dispatch(new AuthActions.SignOutAction());
  }

  toggleTheme() {
    this.store.dispatch(new LayoutActions.ToggleThemeAction());
  }

  toggleSidenav() {
    this.store.dispatch(new LayoutActions.ToggleSidenavAction());
  }
}
