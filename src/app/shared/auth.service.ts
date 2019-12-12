import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/from";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";

import { flatMap, tap } from "rxjs/operators";

import { FirebaseError } from "firebase/app";
import { AngularFireDatabase } from "@angular/fire/database";
import { of } from "rxjs/observable/of";
import { ConfigService } from "./config.service";

@Injectable()
export class AuthService {
  public user: firebase.User;
  public authState$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private configService: ConfigService
  ) {
    this.authState$ = afAuth.authState;
    this.getUserAndConfig();
  }

  getUserAndConfig() {
    return new Promise((resolve, reject) => {
      this.authState$
      .pipe(
        tap((user: firebase.User) => {
          this.user = user
        }),
        flatMap((user: firebase.User) => {
          if (!this.user) return of(null);
          // if (this.configService.layout) return of(this.configService.layout)
          const data = this.configService.getLayoutFromLocalStorage();
          if (!data) {
            return this.configService.getLayoutFromFirebase(this.user.uid);
          }
          return of(data);
        })
      )
      .subscribe((data: string) => {
        console.log(data);
        if (data) {
          this.configService.setLayout(data);
        }
        resolve(data);
        console.log("authState$ changed", this.user);
      });
    })
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  get id(): string {
    return this.authenticated ? this.user.uid : null;
  }

  signIn(): Promise<void> {
    let provider = new firebase.auth.GoogleAuthProvider();

    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((result: firebase.auth.UserCredential) => {
        // The signed-in user info.
        this.user = result.user;
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error("ERROR @ AuthService#signIn() :", error);
      });
  }

  signInWithGoogle(): Promise<void> {
    return this.signIn();
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
