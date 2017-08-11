import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './core/containers/app.component';
import { routes } from './routes';
import { AuthModule } from './auth/auth.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { CoreModule } from './core/core.module';
import { reducers, metaReducers } from './reducers';
import { DashboardModule } from './dashboard/dashboard.module';
import { environment } from "../environments/environment";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),

    // @ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    // app modules
    AngularMaterialModule,
    CoreModule.forRoot(),
    // AuthModule.forRoot(),
    // DashboardModule,
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
