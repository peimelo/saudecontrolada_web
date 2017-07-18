import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule, MdIconModule, MdInputModule, MdSidenavModule, MdToolbarModule,
  MdTooltipModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdSidenavModule,
  MdToolbarModule,
  MdTooltipModule
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MATERIAL_MODULES
  ],
  declarations: [],
  exports: [MATERIAL_MODULES]
})
export class AngularMaterialModule { }
