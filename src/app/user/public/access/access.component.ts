import { Component, OnInit } from '@angular/core';
import {UserAccessService} from "./user-access.service";
import {AccessErrorMessages} from "./access-error-messages";

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {

  registerEmailField = '';
  registerErrorMessage: string|null = null;

  STATUS_CLEAN = 0;
  STATUS_ERROR = 1;
  STATUS_SUCCESS = 2;

  _registrationStatus = this.STATUS_CLEAN;

  constructor(private userAccess: UserAccessService) { }

  ngOnInit(): void {
  }

  get registrationStatus(): number {
    return this._registrationStatus;
  }

  set registrationStatus(status: number) {
    this._registrationStatus = status;
  }

  registerButtonClickEventHandler(): void {
    this.registerEmailAction(this.registerEmailField);
  }

  registerEmailAction(registerEmailField: string): void {
    this.userAccess.registerUserByEmail(registerEmailField).subscribe(
      userResponse => {
        let registrationStatus = this.STATUS_SUCCESS;

        if (!userResponse.isSuccess) {
           registrationStatus = this.STATUS_ERROR;
           this.registerErrorMessage = (new AccessErrorMessages()).getErrorByKey(userResponse.errorCode);
        }

        this.registrationStatus = registrationStatus;
      }
    );
  }
}
