import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import {
  FormBuilder, FormGroup, Validators
} from '@angular/forms';

import { RegisterData } from "../../models/user.model";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      margin: 72px 0;
    }

    md-card-title,
    md-card-content {
      display: flex;
      justify-content: center;
    }

    input {
      width: 300px;
    }
  `]
})
export class SignInFormComponent {
  @Input() errorMessage: string | null;
  @Input() loading: boolean;
  @Output() submitted = new EventEmitter<RegisterData>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
