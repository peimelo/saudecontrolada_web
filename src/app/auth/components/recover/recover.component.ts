import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ResetPasswordData } from 'angular2-token';

import * as AuthActions from '../../actions/auth';
import { AuthService } from '../../services/auth.service';
import * as fromAuth from '../../reducers';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecoverComponent {
  error$: Observable<string>;
  loading$: Observable<boolean>;
  resetPasswordData: ResetPasswordData = <ResetPasswordData>{};

  constructor(private authService: AuthService,
              private store: Store<fromRoot.State>,
              private router: Router) {

    this.error$ = this.store.select(fromAuth.getError);
    this.loading$ = this.store.select(fromAuth.isLoading);

    this.store.select(fromAuth.isAuthenticated)
      .subscribe((isAuthenticated: boolean) => {
        if (isAuthenticated) { this.router.navigate(['/dashboard']); }
      });
  }

  onSignIn() {
    this.store.dispatch(new AuthActions.ResetPasswordAction(this.resetPasswordData));
  }
}
