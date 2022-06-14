import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ConfirmPasswordErrorMatcher} from "./confirm-password-error-matcher";

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.scss']
})
export class ResetFormComponent implements OnInit {

  ERROR_MISMATCH = 'mismatch';

  resetFormControlGroup: FormGroup;

  matcher: ConfirmPasswordErrorMatcher;

  constructor() {
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

  registerSubmitEventHandler(): void {

  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('passwordConfirmation')?.value

    return pass === confirmPass ? null : { mismatch: true };
  }
}
