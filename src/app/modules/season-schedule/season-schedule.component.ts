import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase.service';

@Component({
  selector: 'app-season-schedule',
  templateUrl: './season-schedule.component.html',
  styleUrls: ['./season-schedule.component.scss']
})
export class SeasonScheduleComponent implements OnInit {

  constructor(private _firebaseAuthService: FirebaseService) { }

  ngOnInit(): void {
  }

  public logout() {
    this._firebaseAuthService.logout();
  }

  public getUser() {
    return this._firebaseAuthService.userData;
  }

  public debug() {
    console.log(this._firebaseAuthService.userData);
  }

}
