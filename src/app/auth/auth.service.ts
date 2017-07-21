import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../user/user.model';
import { Credentials } from './interfaces';

@Injectable()
export class AuthService {
  user: User;
  token: string;

  constructor(private http: Http) {
  }

  getName() {
    return this.user && this.user.name;
  }

  isAuthenticated() {
    return this.token != null;
  }

  signin(credentials?: Credentials) {
    return this.http.post('/api/sessions', credentials)
      .map((response: Response) => response.json());
  }
}
