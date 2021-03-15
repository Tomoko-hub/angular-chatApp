import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private ofAuth: AngularFireAuth) { }

  create(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.ofAuth.createUserWithEmailAndPassword(email, password);
  }
}
