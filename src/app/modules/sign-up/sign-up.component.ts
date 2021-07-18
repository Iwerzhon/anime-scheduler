import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/core/firebase.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide = true;
  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private _firebaseAuthService: FirebaseService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (this._firebaseAuthService.isLoggedIn) {
      this._router.navigate(['schedule']);
    }
  }

  getErrorUsername() {
    console.log('bob', this.username, this.username.invalid);
    console.log(this.username.hasError('required') ? 'You must enter a value' : '');
    return this.username.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  signUpGoogle() {
    // check if username is set
    // check if username is not already taken
    // proceed to signUp
    this._firebaseAuthService.signUpGoogle();
  }

  signUpEmail() {
    // check if fields are ok (add FormControl)
    // check if username is not already taken
    // proceed to signUp
    this._firebaseAuthService.signUpEmail();
  }
}
