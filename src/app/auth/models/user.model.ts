export class User {
  constructor(public id: number,
              public admin: boolean,
              public authentication_token: string,
              public date_of_birth: string,
              public email: string,
              public gender: string,
              public height: number,
              public name: string,
              public unconfirmed_email: string) {
  }
}
export interface SignInData {
  email: string;
  password: string;
  userType?: string;
}
