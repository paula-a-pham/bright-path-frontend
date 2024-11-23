import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  UserCredential,
} from '@angular/fire/auth';
import { IUser } from '../../../shared/models/iuser';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  createAccountWithEmailAndPassword(user: IUser): Observable<void> {
    const userCredential = createUserWithEmailAndPassword(
      this.auth,
      user.email,
      user.password!
    ).then((userCredential: UserCredential) => {
      sendEmailVerification(userCredential.user).then();
    });
    return from(userCredential);
  }
}
