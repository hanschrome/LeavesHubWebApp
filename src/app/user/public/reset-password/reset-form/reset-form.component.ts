import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ConfirmPasswordErrorMatcher} from "./confirm-password-error-matcher";
import {ResetPasswordService} from "../reset-password.service";
import {ActivatedRoute} from "@angular/router";
import {UserPassword} from "../../../../../domain/user/properties/user-password";
import {UserToken} from "../../../../../domain/user/properties/user-token";

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.scss']
})
export class ResetFormComponent implements OnInit {

  @Input() tokenParameter = '';
  @Input() subtitle = ''

  ERROR_MISMATCH = 'mismatch';

  STATUS_CLEAN = 0;
  STATUS_ERROR = 1;
  STATUS_SUCCESS = 2;

  error: string | null = null;
  currentStatus = 0;

  resetFormControlGroup: FormGroup;

  matcher: ConfirmPasswordErrorMatcher;

  private _token: string;

  constructor(
    private resetPasswordService: ResetPasswordService,
    private route: ActivatedRoute
  ) {
    this.matcher = new ConfirmPasswordErrorMatcher();
    this._token = this.tokenParameter;

    this.resetFormControlGroup = new FormGroup({
      password: new FormControl('', [
        Validators.required
      ]),
      passwordConfirmation: new FormControl('')
    }, {
      validators: this.checkPasswords
    });
  }

  ngOnInit(): void {
  }

  get token(): string {
    return this._token;
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('passwordConfirmation')?.value

    return pass === confirmPass ? null : {mismatch: true};
  }

  registerSubmitEventHandler(): void {
    this.resetPasswordActionByTokenAndPassword(this.token, this.resetFormControlGroup.controls['password'].value);
  }

  resetPasswordActionByTokenAndPassword(token: string, password: string): void {
    this.resetPasswordService.resetUserPasswordByToken(new UserToken(token), new UserPassword(password)).subscribe(
      (httpResponse) => {
        if (!httpResponse.isSuccess) {
          this.error = httpResponse.error;
          this.currentStatus = this.STATUS_ERROR;
        }

        this.currentStatus = this.STATUS_SUCCESS;
      }
    );
  }
}
