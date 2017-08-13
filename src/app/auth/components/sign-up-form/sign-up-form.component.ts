import {
  Component, EventEmitter, Input,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { RegisterData } from "../../models/user.model";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['../sign-in-form/sign-in-form.component.scss'],
})
export class SignUpFormComponent {
  @Input() errorMessage: string | null;
  @Input() loading: boolean;
  @Output() submitted = new EventEmitter<RegisterData>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
