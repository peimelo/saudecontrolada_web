import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TooltipPosition } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() email: '';
  @Input() isAuthenticated: false;
  @Output() signOut = new EventEmitter();
  position: TooltipPosition = 'before';
}
