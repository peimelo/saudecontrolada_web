import {
  ChangeDetectionStrategy, Component, OnDestroy,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import {Store} from "@ngrx/store";

import {Observable} from "rxjs/Observable";
import {RegisterData} from "angular2-token";

import { AuthService } from "../../services/auth.service";
import { ClearErrorAction, SignUpAction } from '../../actions/auth';
import * as fromAuth from '../../reducers';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnDestroy, OnInit {
  /**
   * Component state.
   * @type {boolean}
   */
  private alive = true;

  error$: Observable<string>;
  form: FormGroup;
  loading$: Observable<boolean>;

  constructor(private formBuilder: FormBuilder,
              private store: Store<fromRoot.State>) {
  }

  /**
   *  Lifecycle hook that is called when a directive, pipe or service is destroyed.
   * @method ngOnDestroy
   */
  public ngOnDestroy() {
    this.alive = false;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });

    this.error$ = this.store.select(fromAuth.getError);
    this.loading$ = this.store.select(fromAuth.isLoading);

    // this.authService.isAuthenticated$()
    //   .takeWhile(() => this.alive)
    //   .filter(authenticated => authenticated)
    //   .subscribe((isAuthenticated: boolean) => {
    //     if (isAuthenticated) {
    //       this.store.dispatch(go('/dashboard'));
    //     }
    //   });

    this.store.dispatch(new ClearErrorAction());
  }

  signIn() {
    // this.store.dispatch(go("/sign-in"));
  }

  submit() {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    const passwordConfirmation = this.form.get('passwordConfirmation').value;

    // trim values
    email.trim();
    password.trim();
    passwordConfirmation.trim();

    // set payload
    const payload: RegisterData = {
      email,
      password,
      passwordConfirmation
    };

    this.store.dispatch(new SignUpAction(payload));
  }
}
