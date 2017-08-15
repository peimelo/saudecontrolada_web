import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

import * as Auth from '../../auth/actions/auth.actions';
import * as fromAuth from '../../auth/reducers';
import * as Layout from '../actions/layout';
import * as fromRoot from '../../reducers';
import { NavItem } from "../models/nav_item";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout>
      <app-sidenav [open]="showSidenav$ | async">
        <span *ngFor="let navItem of navItems">
          <app-nav-item
            *ngIf="navItem.isAuthenticated ? (isAuthenticated$ | async) : !(isAuthenticated$ | async)"
            (activate)="closeSidenav()"
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
  `,
})
export class AppComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  showSidenav$: Observable<boolean>;

  navItems: NavItem[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<fromRoot.State>,
              private _tokenService: Angular2TokenService) {

    this._tokenService.init({ apiBase: '/api' });

    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    this.isAuthenticated$ = this.store.select(fromAuth.isAuthenticated);
  }

  closeSidenav() {
    this.store.dispatch(new Layout.CloseSidenavAction());
  }

  getNavItems() {
    this.navItems.push(
      new NavItem('Entrar', 'Entra no sistema', 'exit_to_app', '/sign-in', false),
      new NavItem('Criar conta', 'Cria uma conta', 'person_add', '/sign-up', false),
      new NavItem('Dashboard', 'Painel da minha saúde', 'dashboard', '/sign-up', true),
    );
  }

  ngOnInit() {
    this.getNavItems();

    console.log(this.activatedRoute.snapshot.queryParams);
  }

  openSidenav() {
    this.store.dispatch(new Layout.OpenSidenavAction());
  }

  signOut() {
    this.closeSidenav();
    this.store.dispatch(new Auth.SignOutAction());
  }
}
