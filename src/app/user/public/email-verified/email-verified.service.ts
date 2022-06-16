import { Injectable } from '@angular/core';
import {HttpUserRepository} from "../../../../infrastructure/user/public/access/http-user-repository";
import {Observable} from "rxjs";
import {
  IUserEmailVerifyResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-email-verify-response";
import {IUserEmail} from "../../../../domain/user/properties/i-user-email";
import {IUserToken} from "../../../../domain/user/properties/i-user-token";

@Injectable({
  providedIn: 'root'
})
export class EmailVerifiedService {

  constructor(private httpUserRepository: HttpUserRepository) { }

  verifyEmail(email: IUserEmail, token: IUserToken): Observable<IUserEmailVerifyResponse> {
    return this.httpUserRepository.verifyUserByEmail(email, token);
  }
}
