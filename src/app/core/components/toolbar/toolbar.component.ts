import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TooltipPosition } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  @Input() email: '';
  @Input() isAuthenticated: false;
  @Output() openMenu = new EventEmitter();
  @Output() signOut = new EventEmitter();
  // position: TooltipPosition = 'before';
}
