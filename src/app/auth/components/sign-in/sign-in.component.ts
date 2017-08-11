import {
  ChangeDetectionStrategy, Component, OnDestroy,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';

import { SignInData } from 'angular2-token';

import { ClearErrorAction, AuthenticateAction } from '../../actions/auth';
import { AuthService } from '../../services/auth.service';
import * as fromAuth from '../../reducers';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnDestroy, OnInit {
  /**
   * Component state.
   * @type {boolean}
   */
  private alive = true;

  error$: Observable<string>;
  form: FormGroup;
  loading$: Observable<boolean>;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
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
      password: ['', Validators.required]
    });

    this.error$ = this.store.select(fromAuth.getError);
    this.loading$ = this.store.select(fromAuth.isLoading);

    this.store.select(fromAuth.isAuthenticated)
      .takeWhile(() => this.alive)
      .filter(authenticated => authenticated)
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          // this.store.dispatch(go('/dashboard'));
        }
      });

    this.store.dispatch(new ClearErrorAction());
  }

  signUp() {
    // this.store.dispatch(go("/sign-up"));
  }

  submit() {
    const email: string = this.form.get('email').value;
    const password: string = this.form.get('password').value;

    // trim values
    email.trim();
    password.trim();

    // set payload
    const payload: SignInData = {
      email,
      password
    };

    this.store.dispatch(new AuthenticateAction(payload));
  }
}
