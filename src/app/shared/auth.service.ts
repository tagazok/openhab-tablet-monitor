import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/from";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";

import { flatMap, tap } from "rxjs/operators";

import { FirebaseError } from "firebase/app";
import { AngularFireDatabase } from "angularfire2/database";
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
    this.todo();
  }

  todo() {
    return new Promise((resolve, reject) => {
      this.authState$
      .pipe(
        tap((user: firebase.User) => {
          this.user = user
        }),
        flatMap((user: firebase.User) => {
          if (!this.user) return of(null);
          const data = localStorage.getItem("layout");
          if (!data) {
            return this.db.object(`users/${this.user.uid}/layout`).valueChanges();
          }
          return of(data);
        })
      )
      .subscribe((data: string) => {
        debugger;
        console.log(data);
        if (data) {
          this.configService.layout = JSON.parse(data);
          localStorage.setItem("layout", data);
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
