import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessComponent } from './user/public/access/access.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import { LostPasswordComponent } from './user/public/lost-password/lost-password.component';
import { ResetPasswordComponent } from './user/public/reset-password/reset-password.component';
import { EmailVerifiedComponent } from './user/public/email-verified/email-verified.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    LostPasswordComponent,
    ResetPasswordComponent,
    EmailVerifiedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
