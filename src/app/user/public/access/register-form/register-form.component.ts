import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AccessErrorMessages} from "../access-error-messages";
import {UserAccessService} from "../user-access.service";
import {UserEmail} from "../../../../../domain/user/properties/user-email";


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerErrorMessage: string | null = null;

  STATUS_CLEAN = 0;
  STATUS_REGISTRATION_ERROR = 1;
  STATUS_REGISTRATION_SUCCESS = 2;
  STATUS_REGISTRATION_SENDING = 3;

  _registrationStatus = this.STATUS_CLEAN;

  registerEmailFormControl = new FormControl('', [
    Validators.email,
    Validators.required,
  ]);

  constructor(private userAccess: UserAccessService) {
  }

  ngOnInit(): void {
  }

  get registrationStatus(): number {
    return this._registrationStatus;
  }

  set registrationStatus(status: number) {
    this._registrationStatus = status;
  }

  registerButtonClickEventHandler(): void {
    this.registrationStatus = this.STATUS_REGISTRATION_SENDING;
    this.registerErrorMessage = null;
    this.registerEmailAction(this.registerEmailFormControl.value || '');
  }

  registerEmailAction(registerEmailField: string): void {
    this.userAccess.registerUserByEmail(new UserEmail(registerEmailField)).subscribe(
      userResponse => {
        let registrationStatus = this.STATUS_REGISTRATION_SUCCESS;

        if (!userResponse.isSuccess) {
          registrationStatus = this.STATUS_REGISTRATION_ERROR;
          this.registerErrorMessage = (new AccessErrorMessages()).getErrorByKey(userResponse.errorCode);
        }

        this.registrationStatus = registrationStatus;
      }
    );
  }
}
