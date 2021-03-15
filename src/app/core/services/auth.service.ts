import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private ofAuth: AngularFireAuth) {

   }

  create(email: string, password: string): Promise<void> {
    return this.ofAuth.createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        const { user } = credential;
        const actionCodesettings = {
          url: `http://localhost:4200/?newAccount=true&email=${user.email}`
        };

        user.sendEmailVerification(actionCodesettings);
      });
  }
}
