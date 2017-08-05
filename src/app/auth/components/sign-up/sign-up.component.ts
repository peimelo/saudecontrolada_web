import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RegisterData} from "angular2-token";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {NgForm} from "@angular/forms";

import {AuthService} from "../../auth.service";
import * as AuthActions from '../../auth.actions';
import * as fromRoot from '../../../app.reducers';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  error$: Observable<string>;
  loading$: Observable<boolean>;
  registerData: RegisterData = <RegisterData>{};

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

  ngOnInit() {
    this.store.dispatch(new AuthActions.ClearErrorAction());
  }

  onSubmit(form: NgForm) {
    this.registerData = {
      email: form.value.email,
      password: form.value.password,
      passwordConfirmation: form.value.passwordConfirmation
    };
    this.store.dispatch(new AuthActions.SignUpAction(this.registerData));
  }
}
