import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/login/login.component';
import { SeasonScheduleComponent } from './modules/season-schedule/season-schedule.component';

import { AuthGuard } from "./core/auth.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'schedule', component: SeasonScheduleComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
