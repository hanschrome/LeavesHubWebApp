import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccessComponent} from "./user/public/access/access.component";
import {LostPasswordComponent} from "./user/public/lost-password/lost-password.component";
import {ResetPasswordComponent} from "./user/public/reset-password/reset-password.component";
import {EmailVerifiedComponent} from "./user/public/email-verified/email-verified.component";
import {ProfileComponent} from "./user/private/profile/profile.component";
import {ForestComponent} from "./forest/forest.component";
import {TreeComponent} from "./forest/tree/tree.component";
import {BranchComponent} from "./forest/tree/branch/branch.component";
import {LeafComponent} from "./forest/tree/branch/leaf/leaf.component";

const routes: Routes = [
  {path: '', component: AccessComponent},
  {path: 'lost-password', component: LostPasswordComponent},
  {path: 'reset-password/:token', component: ResetPasswordComponent},
  {path: 'email-verified', component: EmailVerifiedComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'forest/:forestId', component: ForestComponent},
  {path: 'tree/:treeId', component: TreeComponent},
  {path: 'branch/:branchId', component: BranchComponent},
  {path: 'leaf/:leafId', component: LeafComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
