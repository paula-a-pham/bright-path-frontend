import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../../../shared/models/iuser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initializeSignUpForm();
  }

  initializeSignUpForm(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  createAccountWithEmailAndPassword(): void {
    const user = this.form.value as IUser;
  }
}
