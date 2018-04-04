import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { FirebaseError } from 'firebase/app';


@Injectable()
export class AuthService {
  public user: firebase.User;
  public authState$: Observable<firebase.User>;
  public admin: boolean;

  constructor(private afAuth: AngularFireAuth) {
    this.user = null;
    this.authState$ = afAuth.authState;

    this.authState$.subscribe((user: firebase.User) => {
      this.user = user;

      console.log('authState$ changed', this.user);
    });
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  get id(): string {
    return this.authenticated ? this.user.uid : null;
  }

  isAdmin() {
    if (!this.admin) {
      const ls = window.localStorage.getItem("admin");
      if (!ls) {
        this.admin = false;
      } else {
        this.admin = true;
      }
    }
    return this.admin;
  }

  signIn(): Promise<void> {
    let provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth()
      .signInWithPopup(provider)
      .then((result: firebase.auth.UserCredential) => {
        // The signed-in user info.
        this.user = result.user;
      }).catch((error: FirebaseError) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error('ERROR @ AuthService#signIn() :', error);
      });
  }

  signInWithGoogle(): Promise<void> {
    return this.signIn();
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}