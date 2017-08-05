import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SignInData } from 'angular2-token';

import * as AuthActions from '../../auth.actions';
import { AuthService } from '../../auth.service';
import * as fromRoot from '../../../app.reducers';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
  error$: Observable<string>;
  loading$: Observable<boolean>;
  signInData: SignInData = <SignInData>{};

  constructor(private authService: AuthService,
              private store: Store<fromRoot.State>,
              private router: Router) {

    this.error$ = this.authService.error$();
    this.loading$ = this.authService.loading$();

    this.authService.isAuthenticated$()
      .subscribe((isAuthenticated: boolean) => {
        if (isAuthenticated) { this.router.navigate(['/dashboard']); }
      });
  }

  onSubmit(form: NgForm) {
    this.signInData = {
      email: form.value.email,
      password: form.value.password
    };
    this.store.dispatch(new AuthActions.SignInAction(this.signInData));
  }
}
