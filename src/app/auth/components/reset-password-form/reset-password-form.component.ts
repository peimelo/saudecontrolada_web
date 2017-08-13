import {
  Component, EventEmitter, Input,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ResetPasswordData } from '../../models/user.model';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
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
  `],
})
export class ResetPasswordFormComponent {
  @Input() errorMessage: string | null;
  @Input() loading: boolean;
  @Output() submitted = new EventEmitter<ResetPasswordData>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
