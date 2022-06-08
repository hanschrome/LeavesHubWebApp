import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccessComponent} from "./user/public/access/access.component";
import {LostPasswordComponent} from "./user/public/lost-password/lost-password.component";
import {ResetPasswordComponent} from "./user/public/reset-password/reset-password.component";
import {EmailVerifiedComponent} from "./user/public/email-verified/email-verified.component";
import {ProfileComponent} from "./user/private/profile/profile.component";

const routes: Routes = [
  {path: '', component: AccessComponent},
  {path: 'lost-password', component: LostPasswordComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'email-verified', component: EmailVerifiedComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
