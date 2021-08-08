import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/core/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(
    private _firebaseAuthService: FirebaseService,
    private _router: Router,
  ) {
  }

  ngOnInit(): void {
    if (this._firebaseAuthService.isLoggedIn) {
      this._router.navigate(['schedule']);
    }
  }

  public loginGoogle() {
    this._firebaseAuthService.loginGoogle();
  }

  public loginEmail() {
    alert('pas implémenté');
  }

  public debug() {
    this._firebaseAuthService.debug();
  }

  public forgotPassword() {
    alert('rekt');
  }
}