import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <md-card>
      Ajudando você a ter uma vida mais saudável.
    </md-card>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      margin: 72px 0;
    }

    md-card {
      width: 400px;
      height: 300px;
      margin: 15px;
    }
  `]
})
export class HomeComponent {
}
