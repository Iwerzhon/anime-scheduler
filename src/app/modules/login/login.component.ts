import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/core/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _firebaseAuthService: FirebaseService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (this._firebaseAuthService.isLoggedIn) {
      this._router.navigate(['schedule']);
    }
  }

  public login() {
    this._firebaseAuthService.login();
  }

  public debug() {
    this._firebaseAuthService.debug();
  }
}