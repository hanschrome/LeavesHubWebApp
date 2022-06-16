import { Injectable } from '@angular/core';
import {HttpUserRepository} from "../../../../infrastructure/user/public/access/http-user-repository";
import {Observable} from "rxjs";
import {
  IUserEmailVerifyResponse
} from "../../../../domain/user/contracts/user-repository/responses/i-user-email-verify-response";
import {IUserEmail} from "../../../../domain/user/properties/i-user-email";

@Injectable({
  providedIn: 'root'
})
export class EmailVerifiedService {

  constructor(private httpUserRepository: HttpUserRepository) { }

  verifyEmail(email: IUserEmail, token: string): Observable<IUserEmailVerifyResponse> {
    return this.httpUserRepository.verifyUserByEmail(email, token);
  }
}
