import { Component, OnInit } from '@angular/core';
import {UserAccessService} from "./user-access.service";

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {

  registerEmailField = '';

  constructor(private userAccess: UserAccessService) { }

  ngOnInit(): void {
  }

  registerButtonClickEventHandler(): void {
    this.userAccess.registerUserByEmail(this.registerEmailField);
  }
}
