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

export const COMPONENTS = [
  AppComponent,
  HomeComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
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
