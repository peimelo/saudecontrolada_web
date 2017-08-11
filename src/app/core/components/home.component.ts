import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <md-card>
      Ajudando você a ter uma vida mais saudável.
    </md-card>
  `,
})
export class HomeComponent implements OnInit {
  // name: string;

  constructor(/*private authService: AuthService*/) { }

  ngOnInit() {
    // this.name = this.authService.getName();
  }

}
