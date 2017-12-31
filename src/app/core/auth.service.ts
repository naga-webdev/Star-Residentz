import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {
  authState: any = null;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(auth => {
      this.authState = auth;
    });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false;
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest';
    } else if (this.currentUserAnonymous) {
      return 'Anonymous';
    } else {
      return this.authState['displayName'] || 'User without a Name';
    }
  }

  // Social Auth

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => {
        this.authState = credential.user;
        this.updateUserData();
      })
      .catch(error => console.log(error));
  }

  //// Sign Out ////

  signOut(): void {
    if (this.afAuth.authState) {
      this.afAuth.auth.signOut();
    }
    // this.router.navigate(['/pre-stay/search']);
  }

  //// Helpers ////

  private updateUserData(): void {
    // Writes user name and email to realtime db

    console.log(this.currentUserId);

    //   const path = `users/${this.currentUserId}`; // Endpoint on firebase
    //   const data = {
    //     email: this.authState.email,
    //     name: this.authState.displayName
    //   };

    //   this.db
    //     .object(path)
    //     .update(data)
    //     .catch(error => console.log(error));
    // }
  }
}
