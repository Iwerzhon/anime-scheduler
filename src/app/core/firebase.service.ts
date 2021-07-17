import { Injectable, NgZone } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public userData: any;
  public redirectUrl: any = '';

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        if (this.redirectUrl) {
          this.router.navigate(['schedule']);
          this.redirectUrl = '';
        }
      } else {
        localStorage.removeItem('item');
        // this.router.navigate(['login']);
      }
    })
  }

  // google authentication
  public login() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['schedule']);
      });
      this.setUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  public logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  public setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    // TODO def model User
    const userData: any = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const result = (user !== null && user.emailVerified === true) ? true : false;
    return result;
  }

  // TODO : split in a new service firebaseData and rename the current firebaseAuth
  public getUsers(): Observable<any> {
    return this.afs.collection('users').valueChanges();
  }

  public debug() {
    console.log('user authenticated', JSON.parse(localStorage.getItem('user') || '{}'));
  }
}
