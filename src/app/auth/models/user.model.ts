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

export interface ChangePasswordData {
  password: string;
  password_confirmation: string;
  accessToken?: string;
  client?: string;
  expiry?: string;
  uid?: string;
}

export interface RegisterData {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface ResetPasswordData {
  email: string;
}

export interface SignInData {
  email: string;
  password: string;
}
