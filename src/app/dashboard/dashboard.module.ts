import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardService } from './dashboard.service';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
