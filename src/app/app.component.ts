import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animeScheduler';
  items: Observable<any[]>;

  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth) {
    this.items = firestore.collection('users').valueChanges();
    console.log(this.items);
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }

  debug() {
    this.auth.user.subscribe(user => {
        console.log('user', user);
      });
  }
}
