import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { UserLogin } from 'src/app/types/UserLogin';
import { GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  error: any;

  private userSubject = new BehaviorSubject<any>(null);

  constructor(public auth: AngularFireAuth) {
    const user = sessionStorage.getItem('user');
    if(user){

      this.userSubject.next(JSON.parse(user));
    }
  }

  async LoginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();

      const credential = await this.auth.signInWithPopup(provider);
      this.user = credential.user;
      this.setUserSubject(this.user);

      return credential.user;
    } catch (error) {
      this.error = error;
      return this.error;
    }
  }

  async Login(userLogin: UserLogin) {
    try {
      const credential = await this.auth.signInWithEmailAndPassword(userLogin.email, userLogin.password);
      this.user = credential.user;
      this.setUserSubject(this.user);

      return credential.user;
    } catch (error) {
      this.error = error;
      return this.error;
    }
  }

  private setUserSubject(user: any) {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  isAuthenticated() {
    return sessionStorage.getItem('user');
  }

  getRoles(){
    return this.userSubject.getValue();
  }

  logout(){
    this.userSubject.next(null);
    sessionStorage.clear();
    this.auth.signOut();
  }
}
