import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  @Input() email: '';
  @Input() isAuthenticated: false;
  @Output() toggleMenu = new EventEmitter();
  @Output() toggleTheme = new EventEmitter();
  @Output() signOut = new EventEmitter();
}
