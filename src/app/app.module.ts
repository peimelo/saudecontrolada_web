import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

// @ngrx
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";

import { Angular2TokenService } from 'angular2-token';

import { CoreModule } from './core/core.module';
import { AuthModule } from "./auth/auth.module";

import { routes } from './routes';
import { reducers, metaReducers } from './reducers';

import { AppComponent } from './core/containers/app.component';
import { environment } from "../environments/environment";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),

    // @ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),

    // app modules
    CoreModule.forRoot(),
    AuthModule.forRoot(),
    // DashboardModule,
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
