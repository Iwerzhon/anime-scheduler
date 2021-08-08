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
  username = '';
  usernameControl = new FormControl('', [Validators.required]);
  email = '';
  emailControl = new FormControl('', [Validators.required, Validators.email]);

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
    return this.usernameControl.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorEmail() {
    if (this.emailControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailControl.hasError('email') ? 'Not a valid email' : '';
  }

  signUpGoogle() {
    console.log('this.username', this.username);
    if (!this.username || this.usernameControl.hasError('required')) {
      console.error('username is missing');
      // to replace with form error trigger
      alert('please set a username even if you log in using Google');
    } else {
      // check if username is not already taken

      // proceed to signUp
      this._firebaseAuthService.signUpGoogle(this.username);
    }

  }

  signUpEmail() {
    // check if fields are ok (add FormControl)
    // check if username is not already taken
    // proceed to signUp
  }
}
