import {
  ChangeDetectionStrategy, Component, EventEmitter, Input,
  OnInit, Output
} from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup,
  Validators
} from '@angular/forms';

import { SignInData } from "../../models/user.model";

@Component({
  selector: 'app-sign-in-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  @Input()
  set loading(isLoading: boolean) {
    if (isLoading) {
      this.form.disable();
    }

    this.form.enable();
  }

  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<SignInData>();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signUp() {}

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
