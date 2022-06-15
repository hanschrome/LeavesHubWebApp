import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  private _token: string

  constructor(private route: ActivatedRoute) {
    this._token = route.snapshot.paramMap.get('token') || '';
  }

  get token(): string {
    return this._token;
  }

  ngOnInit(): void {
  }

}
