import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from "./containers/app.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { AngularMaterialModule } from "../shared/angular-material.module";
import { HomeComponent } from "./components/home.component";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./components/layout.component";
import { NavItemComponent } from "./components/nav-item.component";
import { SidenavComponent } from "./components/sidenav.component";
import { NotFoundPageComponent } from './containers/not-found-page';
import { FormsModule } from '@angular/forms';

export const COMPONENTS = [
  AppComponent,
  HomeComponent,
  LayoutComponent,
  NavItemComponent,
  NotFoundPageComponent,
  SidenavComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
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
