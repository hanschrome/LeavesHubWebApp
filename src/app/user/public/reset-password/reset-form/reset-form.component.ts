import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ConfirmPasswordErrorMatcher} from "./confirm-password-error-matcher";
import {HttpUserRepository} from "../../../../../infrastructure/user/public/access/http-user-repository";

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

  error: string|null = null;
  currentStatus = 0;

  resetFormControlGroup: FormGroup;

  matcher: ConfirmPasswordErrorMatcher;

  constructor(
    private httpUserRepository: HttpUserRepository
  ) {
    this.matcher = new ConfirmPasswordErrorMatcher();

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

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('passwordConfirmation')?.value

    return pass === confirmPass ? null : {mismatch: true};
  }

  registerSubmitEventHandler(): void {
    this.resetPasswordAction();
  }

  resetPasswordAction(): void {
    this.httpUserRepository.resetUserPasswordByToken(
      '',
      this.resetFormControlGroup.controls['password'].value).subscribe(
      (httpResponse) => {
        if (httpResponse.isSuccess) {

          return;
        }

        this.error = httpResponse.error;
      }
    );
  }
}
