import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserAccessService} from "../user-access.service";
import {AccessErrorMessages} from "../access-error-messages";
import {UserEmail} from "../../../../../domain/user/properties/user-email";
import {UserPassword} from "../../../../../domain/user/properties/user-password";

@Component({
  selector: 'app-access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.scss']
})
export class AccessFormComponent implements OnInit {

  errorMessage: string | null = null;

  STATUS_CLEAN = 0;
  STATUS_SENDING = 1;
  STATUS_LOGIN_ERROR = 2;

  private _loginStatus = this.STATUS_CLEAN;

  formGroup = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ])
  })

  get loginStatus(): number {
    return this._loginStatus;
  }

  set loginStatus(value: number) {
    this._loginStatus = value;
  }

  constructor(private userAccessService: UserAccessService) {
  }

  ngOnInit(): void {
  }

  loginButtonClickEventHandler(): void {
    this.loginStatus = this.STATUS_SENDING;
    this.loginAction(this.formGroup.controls.email.value || '', this.formGroup.controls.password.value || '');
  }

  loginAction(email: string, password: string): void {
    this.userAccessService.loginUserByEmailAndPassword(new UserEmail(email), new UserPassword(password)).subscribe(
      loginHttpResponse => {
        if (!loginHttpResponse.isSuccess) {
          this.loginStatus = this.STATUS_LOGIN_ERROR;
          this.errorMessage = (new AccessErrorMessages()).getErrorByKey(loginHttpResponse.error || '');
          return;
        }

        console.log(loginHttpResponse.jwt, loginHttpResponse.expiresInSeconds); // @todo handle it
      }
    )
  }

}
