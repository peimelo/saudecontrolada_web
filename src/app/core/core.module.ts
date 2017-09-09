import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './containers/app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { HomeComponent } from './components/home.component';
import { NavItemComponent } from './components/nav-item.component';
import { NotFoundPageComponent } from './containers/not-found-page';
import { reducers } from './reducers';

export const COMPONENTS = [
  AppComponent,
  HomeComponent,
  NavItemComponent,
  NotFoundPageComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    StoreModule.forFeature('layout', reducers),
  ],
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS
  ]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule
    }
  }
}
