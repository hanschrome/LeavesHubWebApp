import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccessComponent} from './user/public/access/access.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {LostPasswordComponent} from './user/public/lost-password/lost-password.component';
import {ResetPasswordComponent} from './user/public/reset-password/reset-password.component';
import {EmailVerifiedComponent} from './user/public/email-verified/email-verified.component';
import {ProfileComponent} from './user/private/profile/profile.component';
import {ForestListComponent} from './forest/components/forest-list/forest-list.component';
import {ForestComponent} from './forest/forest.component';
import {TreeComponent} from './forest/tree/tree.component';
import {BranchComponent} from './forest/tree/branch/branch.component';
import {LeafComponent} from './forest/tree/branch/leaf/leaf.component';
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HttpUserRepository} from "../infrastructure/user/public/access/http-user-repository";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    LostPasswordComponent,
    ResetPasswordComponent,
    EmailVerifiedComponent,
    ProfileComponent,
    ForestListComponent,
    ForestComponent,
    TreeComponent,
    BranchComponent,
    LeafComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [
    HttpUserRepository,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
