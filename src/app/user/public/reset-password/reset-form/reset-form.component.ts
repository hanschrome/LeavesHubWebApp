import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ConfirmPasswordErrorMatcher} from "./confirm-password-error-matcher";
import {ResetPasswordService} from "../reset-password.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.scss']
})
export class ResetFormComponent implements OnInit {

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
    this._token = route.snapshot.paramMap.get('token') || '';

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
    this.resetPasswordAction();
  }

  resetPasswordAction(): void {
    this.resetPasswordService.resetUserPasswordByToken(
      this.token,
      this.resetFormControlGroup.controls['password'].value).subscribe(
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
