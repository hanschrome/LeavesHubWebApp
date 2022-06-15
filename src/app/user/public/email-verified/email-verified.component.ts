import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-email-verified',
  templateUrl: './email-verified.component.html',
  styleUrls: ['./email-verified.component.scss']
})
export class EmailVerifiedComponent implements OnInit {

  private readonly _token: string;

  constructor(private route: ActivatedRoute) {
    this._token = route.snapshot.paramMap.get('token') || '';
  }

  get token(): string {
    return this._token;
  }

  ngOnInit(): void {
  }
}
