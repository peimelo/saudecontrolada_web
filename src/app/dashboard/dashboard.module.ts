import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardEffects } from './dashboard.effects';
import { DashboardService } from './dashboard.service';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { LineChartComponent } from './components/line-chart/line-chart.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    EffectsModule.run(DashboardEffects),
    NgxChartsModule
  ],
  declarations: [
    DashboardComponent,
    LineChartComponent
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
