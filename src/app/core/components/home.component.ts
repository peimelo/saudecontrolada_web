import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Angular2TokenService } from 'angular2-token';

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
export class HomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private _tokenService: Angular2TokenService) {
  }

  onSubmit() {
    this._tokenService.signInOAuth('github');
    // this.authService.logGithub()
    //   .subscribe(
    //     res =>      console.log(res),
    //     error =>    console.log(error)
    //   );
  }

  ngOnInit() {
    const queryParams = this.activatedRoute.snapshot.queryParams;

    console.log(queryParams);

    if (queryParams && queryParams['reset_password']) {
      this.router.navigate(['/change-password'], { queryParamsHandling: 'merge' });
    }
  }
}
