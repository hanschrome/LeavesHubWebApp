import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {LostPasswordService} from "./lost-password.service";

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.scss']
})
export class LostPasswordComponent implements OnInit {

  status = 0;

  STATUS_CLEAN = 0;
  STATUS_SUCCESS = 1;
  STATUS_ERROR = 2;

  error = '';

  lostPasswordFormControl = new FormControl('', [Validators.required]);

  constructor(private lostPasswordService: LostPasswordService) { }

  ngOnInit(): void {
  }

  onSubmitResetPasswordFormEventHandler(): void {
    this.recoverUserPasswordByEmail(this.lostPasswordFormControl.value || '');
  }

  recoverUserPasswordByEmail(email: string): void {
    this.status = this.STATUS_CLEAN;

    this.lostPasswordService.recoverUserPasswordByEmail(email).subscribe(
      (response) => {
        if (!response.isSuccess) {
          this.error = response.error || '';
          this.status = this.STATUS_ERROR;
          return;
        }

        this.status = this.STATUS_SUCCESS;
      }
    )
  }
}
