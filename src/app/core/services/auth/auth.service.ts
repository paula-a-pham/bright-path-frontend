import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  UserCredential,
} from '@angular/fire/auth';
import { IUser } from '../../../shared/models/iuser';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  createAccountWithEmailAndPassword(user: IUser): Observable<UserCredential> {
    const userCredential = createUserWithEmailAndPassword(
      this.auth,
      user.email,
      user.password!
    ).then();
    return from(userCredential);
  }
}
