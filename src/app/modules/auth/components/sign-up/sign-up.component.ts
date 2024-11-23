import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../../../shared/models/iuser';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { AuthError } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
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

  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  createAccountWithEmailAndPassword(): void {
    if (this.form.valid) {
      const user = this.form.value as IUser;
      this.authService.createAccountWithEmailAndPassword(user).subscribe({
        next: (userCredential) => {},
        error: (error: AuthError) => {
          const e = error.code.replace('auth/', '');
          console.error(e);
        },
      });
    }
  }
}
