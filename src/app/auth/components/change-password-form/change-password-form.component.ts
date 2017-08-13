import {
  Component, EventEmitter, Input,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ChangePasswordData } from '../../models/user.model';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
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
export class ChangePasswordFormComponent {
  @Input() email: string | null;
  @Input() errorMessage: string | null;
  @Input() loading: boolean;
  @Output() submitted = new EventEmitter<ChangePasswordData>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
