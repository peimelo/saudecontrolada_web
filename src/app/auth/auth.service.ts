import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';
// import 'rxjs/Rx';

@Injectable()
export class AuthService {
  user: User;
  token: string;

  constructor(private http: Http,
              private router: Router) {
  }

  getName() {
    return this.user && this.user.name;
  }

  isAuthenticated() {
    return this.token != null;
  }

  signin(email: string, password: string) {
    this.http.post('/api/sessions', { email: email, password: password })
      .map(
        (response: Response) => {
          return response.json()
        }
      )
      .subscribe(
        (user: User) => {
          this.user = user;
          this.token = user.authentication_token;
          this.router.navigate(['/']);
        },
        (error) => console.log(error));
  }

}
