import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!--<div class="flex-container" fxLayout="column">-->
      <!--<div fxLayout="row" fxLayoutAlign="center" class="card-container">-->
        <!--<div fxFlex="90%" fxFlex.md="50%" fxFlex.lg="40%">-->
          <md-card>
            Ajudando você a ter uma vida mais saudável.
          </md-card>
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  `,
})
export class HomeComponent implements OnInit {
  // name: string;

  constructor(/*private authService: AuthService*/) { }

  ngOnInit() {
    // this.name = this.authService.getName();
  }

}
