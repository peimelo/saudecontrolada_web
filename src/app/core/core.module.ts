import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  declarations: [
    HomeComponent,
    ToolbarComponent
  ],
  exports: [
    AppRoutingModule,
    ToolbarComponent
  ]
})
export class CoreModule { }
